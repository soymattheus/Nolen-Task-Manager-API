import express, { Request, Response } from "express";
import authMiddleware from "../middleware/auth";
import AuthController from "../controller/auth.controller";

const router = express.Router();

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);

router.get("/validate", authMiddleware, (req: Request, res: Response) => {
  return res.json({
    valid: true,
    user: req.user,
  });
});

router.post("/logout", authMiddleware, AuthController.logout);

export default router;
