import { z } from "zod";

export const loginSchema = z.object({
  email: z.email().min(1, "Email é obrigatório").max(50, "Email é muito longo"),

  password: z
    .string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .max(20, "Senha é muito longa"),
});

export const registerSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório").max(50, "Nome é muito longo"),

  last_name: z
    .string()
    .min(1, "Sobrenome é obrigatório")
    .max(50, "Sobrenome é muito longo"),

  email: z.email().min(1, "Email é obrigatório").max(50, "Email é muito longo"),

  password: z
    .string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .max(20, "Senha é muito longa"),
});
