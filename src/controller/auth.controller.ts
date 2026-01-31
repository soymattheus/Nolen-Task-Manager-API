import { Request, Response } from "express";
import Jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";
import User from "../models/user";
import TokenBlacklist from "../models/tokenBlacklist";

export default {
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email: email.toLowerCase() },
    });

    if (!user) {
      return res.status(401).json({ message: "Usuário não encontrado" });
    }

    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      return res.status(401).json({ message: "Senha inválida" });
    }

    if (user.status !== "1") {
      return res.status(401).json({ message: "Usuário inativo" });
    }

    const token = Jwt.sign(
      {
        idUser: user.id_user,
        emailUser: user.email,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" },
    );

    const userData = user.toJSON();
    delete userData.password;

    return res.json({ token: token, user: userData });
  },

  register: async (req: Request, res: Response) => {
    try {
      const { name, last_name, email, password } = req.body;

      const userExists = await User.findOne({
        where: { email },
      });

      if (userExists) {
        return res
          .status(400)
          .json({ message: "Já existe usuário cadastrado com esse e-mail" });
      }

      if (!(name && last_name && email && password)) {
        return res
          .status(400)
          .json({ message: "Preencha os campos obrigatórios" });
      }

      const passwordHash = await bcrypt.hash(password, 10);
      const user = await User.create({
        id_user: uuidv4(),
        name,
        last_name,
        email: email.toLowerCase(),
        password: passwordHash,
        status: "1",
      });

      return res.status(201).json(user);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Ocorreu um erro durante a criação do usuário." });
    }
  },

  logout: async (req: Request, res: Response) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader) {
        return res.status(400).json({ message: "Token não informado" });
      }

      const [, token] = authHeader.split(" ");

      const decoded = Jwt.decode(token);

      if (typeof decoded === "string") {
        return res.status(400).json({ message: "Token inválido" });
      }

      if (!decoded?.exp) {
        return res.status(400).json({ message: "Token inválido" });
      }

      await TokenBlacklist.create({
        token,
        expires_at: new Date(decoded.exp * 1000),
      });

      return res.json({ message: "Logout realizado com sucesso" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Erro ao fazer logout" });
    }
  },
};
