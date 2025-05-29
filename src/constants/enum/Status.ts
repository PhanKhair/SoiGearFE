import { EnumMeta } from "@/config/enum";
import { z } from "zod";

export enum StatusEnum {
  InComing,
  InStock,
  OutStock,
}

export const StatusSchemaEnum = z.nativeEnum(StatusEnum);

const statusMap: Record<StatusEnum, EnumMeta> = {
  [StatusEnum.InComing]: {
    label: "In coming",
    color: "text-yellow-500",
  },
  [StatusEnum.InStock]: {
    label: "In stock",
    color: "text-green-500",
  },
  [StatusEnum.OutStock]: {
    label: "Out stock",
    color: "text-red-500",
  },
};

export function getStatusMeta(status: StatusEnum): EnumMeta {
  return statusMap[status];
}
