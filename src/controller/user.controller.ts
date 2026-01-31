import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { Task, User } from "../models";
import { Sequelize } from "sequelize";
import { UserAttributes, TaskCounter } from "../types/user";

const TASK_STATUS = [
  { label: "P", status: "P" },
  { label: "E", status: "E" },
  { label: "C", status: "C" },
] as const;

export default {
  getUser: async (req: Request, res: Response) => {
    try {
      const userId = req.user?.id;
      const taskCounts = await Task.findAll({
        where: { id_user: userId },
        attributes: [
          "status",
          [Sequelize.fn("COUNT", Sequelize.col("id_task")), "value"],
        ],
        group: ["status"],
        raw: true,
      });

      const tasks_count: TaskCounter[] = TASK_STATUS.map((item) => {
        const found = taskCounts.find((t: any) => t.status === item.status);

        return {
          label: item.label,
          value: found ? Number(found.value) : 0,
        };
      });

      const user = await User.findByPk(userId, {
        attributes: ["name", "last_name", "created_at", "status", "email"],
        raw: true,
      });

      if (!user) {
        throw new Error("Usuário não encontrado");
      }

      const response: UserAttributes = {
        ...user,
        tasks: tasks_count,
      };

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao buscar tarefa",
      });
    }
  },
};
