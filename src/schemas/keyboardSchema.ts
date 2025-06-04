import { z } from "zod";
import { uuidSchema } from "./baseSchema";
import { ratingProductSchema } from "./reviewSchema";
import { StatusSchemaEnum } from "@/constants/enum/Status";

export const imagesProductSchema = z.object({
  img: z.string(),
  color: z.string().optional(),
});

export const keyboardSchema = z.object({
  keyboardId: uuidSchema,

  name: z
    .string()
    .nonempty({ message: "Name must not be empty" })
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(255, { message: "Name must not exceed 255 characters" }),
  oldPrice: z
    .number()
    .int({ message: "Old price must be an integer" })
    .min(0, { message: "Old price must be 0 or greater" }),
  newPrice: z
    .number()
    .int({ message: "New price must be an integer" })
    .min(0, { message: "New price must be 0 or greater" }),
  discount: z.number().min(0, { message: "Discount must be 0 or greater" }),
  description: z
    .string()
    .nonempty({ message: "Description must not be empty" })
    .min(10, { message: "Description must be at least 10 characters long" }),

  images: z.array(imagesProductSchema),

  status: StatusSchemaEnum,

  rating: ratingProductSchema,
});

export type KeyboardType = z.infer<typeof keyboardSchema>;
export type ImagesProductType = z.infer<typeof imagesProductSchema>;
