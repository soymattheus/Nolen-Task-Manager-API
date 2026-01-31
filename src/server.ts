import express, { Request, Response } from "express";
import AuthRoutes from "./routes/auth.route";
import TaskRoutes from "./routes/task.route";
import "./models";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/auth", AuthRoutes);
app.use("/tasks", TaskRoutes);

app.get("/", (req: Request, res: Response) => {
  return res.json({ message: "API rodando com Express + TypeScript 🚀" });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
