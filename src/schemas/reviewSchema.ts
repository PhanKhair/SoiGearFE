import { z } from "zod";

import { timestampFields, uuidSchema } from "./baseSchema";
import { userProductSchema } from "./userSchema";

export const reviewSchema = z.object({
  reviewId: uuidSchema,
  productId: uuidSchema,
  userId: uuidSchema,

  user: userProductSchema,

  comment: z
    .string()
    .nonempty({ message: "Comment must not be empty" })
    .max(1000, { message: "Comment must be at most 1000 characters long" }),
  rating: z
    .number({ message: "Rating must be a number" })
    .min(1, { message: "Rating must be at least 1" })
    .max(5, { message: "Rating must be at most 5" }),

  ...timestampFields,
});

export const ratingProductSchema = z.object({
  totalRating: z
    .number()
    .min(0, { message: "Total rating must be 0 or greater" }),
  averageRating: z
    .number()
    .min(0, { message: "Average rating must be 0 or greater" }),
});

export const ratingSchema = z.object({
  oneStar: z.number(),
  twoStar: z.number(),
  threeStar: z.number(),
  fourStar: z.number(),
  fiveStar: z.number(),
});

export const ratingOverviewSchema = z.object({
  reviewId: uuidSchema,
  productId: uuidSchema,
  totalRating: z
    .number()
    .min(0, { message: "Total rating must be 0 or greater" }),
  averageRating: z
    .number()
    .min(0, { message: "Average rating must be 0 or greater" }),
  rating: ratingSchema,
});

export type ReviewType = z.infer<typeof reviewSchema>;
export type OverviewReviewType = z.infer<typeof ratingOverviewSchema>;
