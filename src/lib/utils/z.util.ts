import { z } from "zod";
import { generateMock } from "@anatine/zod-mock";
import { TZHelper } from "./types.util";

export const zHelper: TZHelper = <TSchema>(schema: z.ZodType<TSchema>) => ({
  validate: (data: unknown) => schema.safeParse(data),
  validateAsync: (data: unknown) => schema.safeParseAsync(data),
  fetch: async (input, init?) => {
    try {
      const res = await fetch(input, init);
      const json = await res.json();
      const { success, data, error } = await schema.safeParseAsync(json);
      if (success) return [data, null];

      return [null, error];
    } catch (error) {
      return [null, error];
    }
  },
  mock: () => generateMock(schema) as z.infer<typeof schema>,
  mocks: (length: number) =>
    Array(length)
      .fill(undefined)
      .map(() => generateMock(schema)),
});
