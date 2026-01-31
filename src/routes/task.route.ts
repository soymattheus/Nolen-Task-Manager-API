import express from "express";
import authMiddleware from "../middleware/auth";
import TaskController from "../controller/task.controller";
import { validate } from "../middleware/inputValidation";
import { createTaskSchema, updateTaskSchema } from "../schemas/task.schema";

const router = express.Router();

router.get("/", authMiddleware, TaskController.getAll);

router.get("/:id", authMiddleware, TaskController.getById);

router.post(
  "/",
  authMiddleware,
  validate(createTaskSchema),
  TaskController.create,
);

router.put(
  "/:id",
  authMiddleware,
  validate(updateTaskSchema),
  TaskController.update,
);

router.delete("/:id", authMiddleware, TaskController.delete);

export default router;
