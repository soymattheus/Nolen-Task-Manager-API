import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string()
    .min(1, "Título é obrigatório")
    .max(50, "Título é muito longo"),

  description: z.string().max(255, "Descrição é muito longa"),

  status: z
    .enum(
      ["P", "E", "C"],
      "Status inválido - P=Pendente, E=Em Andamento, C=Completa",
    )
    .default("P"),
});

export const updateTaskSchema = z.object({
  title: z
    .string()
    .min(1, "Título é obrigatório")
    .max(50, "Título é muito longo")
    .optional(),

  description: z.string().max(255, "Descrição é muito longa").optional(),

  status: z
    .enum(
      ["P", "E", "C"],
      "Status inválido - P=Pendente, E=Em Andamento, C=Completa",
    )
    .optional(),
});
