
import { z } from "zod";
import { zHelper } from "../utils";
import { TokenSchema } from "../definitions";

export const TokenResponseSchema = TokenSchema;

export type TokenResponse = z.infer<typeof TokenResponseSchema>;

export const TokenResponseHelper = zHelper(TokenResponseSchema);