import { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";
import { TokenBlacklist } from "../models";

export default async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token não informado" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const isAtBlacklist = await TokenBlacklist.findOne({
      where: { token },
    });

    if (isAtBlacklist) {
      return res.status(401).json({ message: "Token inválido" });
    }

    const decoded = Jwt.verify(token, process.env.JWT_SECRET!) as {
      idUser: number;
      emailUser: string;
      typeUser: string;
    };

    req.user = {
      id: decoded.idUser,
      email: decoded.emailUser,
    };

    return next();
  } catch (err) {
    return res.status(401).json({ message: "Token inválido ou expirado" });
  }
};
