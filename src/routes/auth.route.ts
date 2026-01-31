import express, { Request, Response } from "express";
import authMiddleware from "../middleware/auth";
import AuthController from "../controller/auth.controller";
import { validate } from "../middleware/inputValidation";
import { loginSchema, registerSchema } from "../schemas/auth.schema";

const router = express.Router();

router.post("/login", validate(loginSchema), AuthController.login);
router.post("/register", validate(registerSchema), AuthController.register);

router.get("/validate", authMiddleware, (req: Request, res: Response) => {
  return res.json({
    valid: true,
    user: req.user,
  });
});

router.post("/logout", authMiddleware, AuthController.logout);

export default router;
