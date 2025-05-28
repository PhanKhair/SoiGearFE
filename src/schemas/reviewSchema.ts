import { z } from "zod";

import { timestampFields, uuidSchema } from "./baseSchema";

export const reviewSchema = z.object({
  reviewId: uuidSchema,
  userId: uuidSchema,
  productId: uuidSchema,

  rating: z
    .number({ message: "Rating must be a number" })
    .min(1, { message: "Rating must be at least 1" })
    .max(5, { message: "Rating must be at most 5" }),
  comment: z
    .string()
    .nonempty({ message: "Comment must not be empty" })
    .max(1000, { message: "Comment must be at most 1000 characters long" }),

  ...timestampFields,
});

export type ReviewType = z.infer<typeof reviewSchema>;
