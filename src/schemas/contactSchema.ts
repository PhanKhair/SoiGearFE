import { z } from "zod";
import { uuidSchema } from "./baseSchema";

export const createContactSchema = z.object({
  userId: uuidSchema,

  name: z
    .string()
    .nonempty({ message: "Name must not be empty" })
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(255, { message: "Name must not exceed 255 characters" })
    .regex(/^[\p{L} ]+$/u, {
      message: "Name can only contain letters and spaces",
    }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z.string().regex(/^(0\d{9}|(\+84)\d{9})$/, {
    message: "Invalid phone number",
  }),

  description: z
    .string()
    .nonempty({ message: "Description must not be empty" })
    .min(10, { message: "Description must be at least 10 characters long" }),
});

export type CreateContactType = z.infer<typeof createContactSchema>;
