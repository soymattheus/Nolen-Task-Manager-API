import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  return res.json({ message: "API rodando com Express + TypeScript 🚀" });
});

app.listen(port, () => {
  console.log(`🔥 Servidor rodando em http://localhost:${port}`);
});
