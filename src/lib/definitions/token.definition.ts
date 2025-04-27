import { z } from "zod";
import { zHelper } from "../utils";

export const TokenSchema = z.object({
    accessToken: z.string(),
    refreshToken: z.string(),
})

export type Token = z.infer<typeof TokenSchema>;

export const TokenHelper = zHelper(TokenSchema);
