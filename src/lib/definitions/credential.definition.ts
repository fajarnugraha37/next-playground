import { z } from "zod";
import { zHelper } from "../utils";

export const UsernamePasswordSchema = z.object({
  username: z.string(),
  password: z.string(),
  expiresInMins: z.number().nullish(),
});

export type UsernamePassword = z.infer<typeof UsernamePasswordSchema>;

export const UsernamePasswordHelper = zHelper(UsernamePasswordSchema);