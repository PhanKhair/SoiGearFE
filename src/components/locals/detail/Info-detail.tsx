import { Button } from "@/components/globals/atoms/button";
import Privilege from "@/components/globals/molecules/privilege";
import RatingStars from "@/components/globals/molecules/render-stars";
import { getStatusMeta, StatusEnum } from "@/constants/enum/Status";
import { KeyboardType } from "@/schemas/keyboardSchema";
import { KeycapType } from "@/schemas/keycapSchema";
import { formatCurrencyVND } from "@/utils/formatter";
import { Heart, Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";

interface informationDetailProps {
  className?: string;
  keyboard?: KeyboardType;
  keycap?: KeycapType;
  selectedColor?: string;
  onColorChange?: (color: string) => void;
}

function InformationDetail({
  className,
  keyboard,
  keycap,
  selectedColor = "",
  onColorChange,
}: informationDetailProps) {
  const product = keyboard || keycap;

  const [count, setCount] = useState(1);

  const [isDiable, setIsDiable] = useState(true);

  const { label, color } = getStatusMeta(
    product?.status || StatusEnum.InComing,
  );

  const handleColorSelect = (color: string) => {
    if (onColorChange) {
      onColorChange(color);
    }
  };

  useEffect(() => {
    setIsDiable(count === 1);
  }, [count]);

  return (
    <div className={className}>
      <div className="flex h-full flex-col gap-4">
        <p className="text-primary text-3xl font-bold uppercase">
          {product?.name}
        </p>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <RatingStars rating={product?.rating?.averageRating ?? 0} />
            <span className="text-xs text-gray-500">
              ({product?.rating?.totalRating ?? 0} reviews)
            </span>
          </div>

          <div className="bg-secondary-foreground h-6 w-[1px]"></div>

          <p className={`${color} text-lg font-medium`}>{label}</p>
        </div>

        <div className="flex gap-2">
          <span className="text-o-primary text-2xl font-medium">
            {formatCurrencyVND(product?.newPrice ?? 0)}
          </span>

          <span className="text-xs font-medium text-gray-400 line-through">
            {formatCurrencyVND(product?.oldPrice ?? 0)}
          </span>
        </div>

        <span className="text-primary text-justify text-lg font-medium">
          {product?.description}
        </span>

        <div>
          {product?.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold text-gray-600">
                Color Options:
              </p>
              <div className="flex items-center gap-2">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className={`rounded-full border-3 p-[5px] hover:cursor-pointer ${selectedColor === color ? "border-primary" : "border-white"}`}
                    onClick={() => handleColorSelect(color)}
                  >
                    <div
                      className="h-6 w-6 rounded-full"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="grid h-13 grid-cols-9 items-center gap-2">
          <div className="col-span-3 grid h-full grid-cols-3 items-center gap-2 xl:grid-cols-4">
            <button
              disabled={isDiable}
              className={`col-span-1 flex h-full items-center justify-center rounded-lg border py-2 hover:cursor-pointer ${isDiable ? "opacity-60" : "bg-secondary"}`}
              onClick={() => setCount(count - 1)}
            >
              <Minus size={20} className="text-primary" />
            </button>
            <div className="col-span-1 flex h-full items-center justify-center rounded-md border text-lg font-medium xl:col-span-2">
              <p>{count}</p>
            </div>
            <button
              className="bg-secondary col-span-1 flex h-full items-center justify-center rounded-md border py-2 hover:cursor-pointer"
              onClick={() => setCount(count + 1)}
            >
              <Plus size={20} className="text-primary" />
            </button>
          </div>
          <div className="col-span-5 h-full">
            <Button className="bg-o-primary hover:bg-secondary hover:text-o-primary h-full w-full duration-400 hover:cursor-pointer">
              Buy now
            </Button>
          </div>

          <div className="col-span-1 flex h-full items-center justify-center rounded-md border hover:cursor-pointer">
            <Heart size={25} className="text-o-primary" />
          </div>
        </div>

        <Privilege />
      </div>
    </div>
  );
}

export default InformationDetail;
