import express from "express";
import authMiddleware from "../middleware/auth";
import TaskController from "../controller/task.controller";

const router = express.Router();

router.get("/", authMiddleware, TaskController.getAll);
router.get("/:id", authMiddleware, TaskController.getById);
router.post("/", authMiddleware, TaskController.create);
router.put("/:id", authMiddleware, TaskController.update);
router.delete("/:id", authMiddleware, TaskController.delete);

export default router;
