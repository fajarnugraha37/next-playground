
import { z } from "zod";
import { zHelper } from "../utils";
import { UserSchema } from "../definitions";

export const UserResponseSchema = UserSchema;

export type UserResponse = z.infer<typeof UserResponseSchema>;

export const UserResponseHelper = zHelper(UserResponseSchema);