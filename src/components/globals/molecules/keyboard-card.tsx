import { KeyboardType } from "@/schemas/productSchema";
import { formatCurrencyVND } from "@/utils/formatter";
import { Heart, Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface keyboardCardProps {
  data: KeyboardType;
}

function KeyboardCard({ data }: keyboardCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite((prev) => !prev);
    toast(isFavorite ? "Removed from favorites" : "Added to favorites", {
      description: (
        <span className="text-gray-500">
          {isFavorite
            ? "Product removed from your list."
            : "Product added to your list."}
        </span>
      ),
    });
  };

  const fullStars = Math.floor(data.rating.averageRating);
  const hasHalfStar = data.rating.averageRating - fullStars >= 0.5;
  const maxStars = 5;

  return (
    <div className="flex flex-col">
      <div className="relative h-60 overflow-hidden rounded-md select-none hover:cursor-pointer">
        <img
          src={data.images[0]}
          alt="product"
          className="absolute top-0 left-0 h-full w-full object-cover opacity-100 transition-opacity hover:opacity-0"
        />
        <img
          src={data.images[1]}
          alt="product-hover"
          className="absolute top-0 left-0 h-full w-full object-cover opacity-0 transition-opacity hover:opacity-100"
        />
        <span className="bg-o-primary absolute top-3 left-3 rounded px-2 py-1 text-xs text-white">
          - {data.discount}%
        </span>

        <div className="absolute top-2 right-2 rounded px-2 py-1 text-xs">
          <div
            className={`flex items-center justify-center rounded-full p-[5px] transition-colors hover:cursor-pointer ${
              isFavorite ? "bg-o-primary" : "bg-secondary"
            }`}
            onClick={() => handleFavorite()}
          >
            <Heart
              size={18}
              className={` ${isFavorite ? "text-white" : "text-o-primary"}`}
            />
          </div>
        </div>
      </div>
      <span className="hover:text-o-primary mt-4 font-medium uppercase duration-300 hover:cursor-pointer">
        {data.name}
      </span>

      <div className="flex items-center gap-2">
        <span className="text-o-primary font-medium">
          {formatCurrencyVND(data.newPrice)}
        </span>

        <span className="text-xs font-medium text-gray-400 line-through">
          {formatCurrencyVND(data.oldPrice)}
        </span>
      </div>

      <div className="flex items-center gap-1">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star
            key={`full-${i}`}
            className="h-4 w-4 fill-yellow-400 text-yellow-400"
          />
        ))}

        {hasHalfStar && (
          <div className="relative h-4 w-4">
            <Star className="absolute top-0 left-0 h-4 w-4 fill-gray-200 text-gray-200" />
            <Star
              className="absolute top-0 left-0 h-4 w-4 fill-yellow-400 text-yellow-400"
              style={{
                clipPath: "inset(0 50% 0 0)",
              }}
            />
          </div>
        )}

        {Array.from({
          length: maxStars - fullStars - (hasHalfStar ? 1 : 0),
        }).map((_, i) => (
          <Star key={`empty-${i}`} className="h-4 w-4 text-gray-200" />
        ))}

        <span className="ml-1 text-sm text-gray-500">
          ({data.rating.totalRating})
        </span>
      </div>
    </div>
  );
}

export default KeyboardCard;
