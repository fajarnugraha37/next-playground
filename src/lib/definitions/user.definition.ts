import { z } from "zod";
import { zHelper } from "../utils";

export const UserSchema = z.object({
  id: z.number().min(0),
  username: z.string().min(1),
  email: z.string().email(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  gender: z.enum(["female", "male"]),
  image: z.string().url(),
});


export type User = z.infer<typeof UserSchema>;

export const UserHelper = zHelper(UserSchema);