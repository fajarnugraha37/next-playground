import { z } from "zod";
import { zHelper } from "../utils";
import { UserSchema } from "./user.definition";
import { TokenSchema } from "./token.definition";

export const UserCompleteSchema = UserSchema.merge(TokenSchema);

export type UserComplete = z.infer<typeof UserCompleteSchema>;

export const UserCompleteSchemaHelper = zHelper(UserCompleteSchema);