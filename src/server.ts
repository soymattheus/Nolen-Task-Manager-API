import express, { Request, Response } from "express";
import AuthRoutes from "./routes/auth.route";
import TaskRoutes from "./routes/task.route";
import UserRoutes from "./routes/user.route";
import "./models";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/auth", AuthRoutes);
app.use("/tasks", TaskRoutes);
app.use("/user", UserRoutes);

app.get("/", (req: Request, res: Response) => {
  return res.json({ message: "API rodando com Express + TypeScript 🚀" });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
