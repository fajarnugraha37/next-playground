import { z } from "zod";
import { zHelper } from "../utils";

export const LoginRequestSchema = z.object({
  username: z.string(),
  password: z.string(),
  expiresInMins: z.number().nullish(),
});

export type LoginRequest = z.infer<typeof LoginRequestSchema>;

export const LoginRequestHelper = zHelper(LoginRequestSchema);