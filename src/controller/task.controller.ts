import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { Task, User } from "../models";
import { create } from "node:domain";

export default {
  getAll: async (req: Request, res: Response) => {
    try {
      const userId = req.user?.id;

      const status =
        typeof req.query.status === "string" ? req.query.status : undefined;

      const page =
        typeof req.query.page === "string"
          ? Math.max(Number(req.query.page), 1)
          : 1;

      const limit =
        typeof req.query.limit === "string"
          ? Math.min(Number(req.query.limit), 100)
          : 10;

      const offset = (page - 1) * limit;

      const { rows: tasks, count: total } = await Task.findAndCountAll({
        where: {
          id_user: userId,
          ...(status && { status }),
        },
        order: [["created_at", "DESC"]],
        limit,
        offset,
      });

      return res.status(200).json({
        data: tasks,
        meta: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit),
        },
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Erro ao buscar tarefas",
      });
    }
  },

  getById: async (req: Request, res: Response) => {
    try {
      const userId = req.user?.id;
      const { id } = req.params;

      const tasks = await Task.findAll({
        where: { id_user: userId, id_task: id },
        order: [["created_at", "DESC"]],
      });

      return res.status(200).json(tasks);
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao buscar tarefa",
      });
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const userId = String(req.user?.id) || "";
      const { title, description, status = "P" } = req.body;

      const newTask = await Task.create({
        id_task: uuidv4(),
        id_user: userId,
        title,
        description,
        status,
        created_at: new Date(),
        updated_at: new Date(),
      });

      return res.status(201).json(newTask);
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao criar tarefa",
      });
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const userId = String(req.user?.id) || "";
      const { id } = req.params;
      const {
        title = undefined,
        description = undefined,
        status = undefined,
      } = req.body;

      const [updated] = await Task.update(
        {
          title,
          description,
          status,
          updated_at: new Date(),
        },
        {
          where: { id_task: id, id_user: userId },
        },
      );

      if (updated) {
        const updatedTask = await Task.findOne({
          where: { id_task: id, id_user: userId },
        });
        return res.status(200).json(updatedTask);
      }

      return res.status(404).json({ message: "Tarefa não encontrada" });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao atualizar tarefa",
      });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const userId = String(req.user?.id) || "";
      const { id } = req.params;

      const deleted = await Task.destroy({
        where: { id_task: id, id_user: userId },
      });

      if (deleted) {
        return res.status(200).json({ message: "Tarefa deletada com sucesso" });
      }

      return res.status(404).json({ message: "Tarefa não encontrada" });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao deletar tarefa",
      });
    }
  },
};
