import { z } from "zod";
import { zHelper } from "../utils";
import { UserSchema, TokenSchema } from "../definitions";

export const LoginResponseSchema = UserSchema.merge(TokenSchema);

export type LoginResponse = z.infer<typeof LoginResponseSchema>;

export const LoginResponseHelper = zHelper(LoginResponseSchema);