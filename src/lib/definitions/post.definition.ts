import { z } from "zod";
import { zHelper } from "@/lib/utils";

export const PostSchema = z.object({
  id: z.string().uuid(),
  slug: z.string().min(10).max(25),
  title: z.string().min(10).max(25),
  description: z.string().min(1).max(255),
  content: z.string().min(1000).max(4000),
});

export type Post = z.infer<typeof PostSchema>;

export const PostHelper = zHelper(PostSchema);