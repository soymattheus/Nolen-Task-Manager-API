import express from "express";
import authMiddleware from "../middleware/auth";
import UserController from "../controller/user.controller";

const router = express.Router();

router.get("/me", authMiddleware, UserController.getUser);

export default router;
