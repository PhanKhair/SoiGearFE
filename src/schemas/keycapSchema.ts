import { z } from "zod";
import { uuidSchema } from "./baseSchema";
import { ratingProductSchema } from "./reviewSchema";
import { StatusSchemaEnum } from "@/constants/enum/Status";
import { imagesProductSchema } from "./keyboardSchema";

export const keycapSchema = z.object({
  keycapId: uuidSchema,

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

export type KeycapType = z.infer<typeof keycapSchema>;
