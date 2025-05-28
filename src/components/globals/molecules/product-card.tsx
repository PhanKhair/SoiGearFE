import { ProductType } from "@/schemas/productSchema";
import { formatCurrencyVND } from "@/utils/formatter";
import { Heart, Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface productCardProps {
  data: ProductType;
}

function ProductCard({ data }: productCardProps) {
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
          className="absolute top-0 left-0 w-full h-full object-cover transition-opacity opacity-100 hover:opacity-0"
        />
        <img
          src={data.images[1]}
          alt="product-hover"
          className="absolute top-0 left-0 w-full h-full object-cover transition-opacity opacity-0 hover:opacity-100"
        />
        <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-2 py-1 rounded">
          - {data.discount}%
        </span>

        <div className="absolute top-2 right-2 text-xs px-2 py-1 rounded">
          <div
            className={`p-[5px] rounded-full hover:cursor-pointer transition-colors ${
              isFavorite ? "bg-orange-500" : "bg-secondary"
            }`}
            onClick={() => handleFavorite()}
          >
            <Heart
              size={18}
              className={` ${isFavorite ? "text-white" : "text-orange-500"}`}
            />
          </div>
        </div>
      </div>
      <span className="font-medium uppercase mt-4 hover:text-orange-500 duration-300 hover:cursor-pointer">
        {data.name}
      </span>

      <div className="flex items-center gap-2">
        <span className="text-orange-500 font-medium">
          {formatCurrencyVND(data.newPrice)}
        </span>

        <span className="text-gray-400 font-medium text-xs line-through">
          {formatCurrencyVND(data.oldPrice)}
        </span>
      </div>

      <div className="flex items-center gap-1">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star
            key={`full-${i}`}
            className="w-4 h-4 text-yellow-400 fill-yellow-400"
          />
        ))}

        {hasHalfStar && (
          <div className="relative w-4 h-4">
            <Star className="absolute top-0 left-0 w-4 h-4 text-gray-200 fill-gray-200" />
            <Star
              className="absolute top-0 left-0 w-4 h-4 text-yellow-400 fill-yellow-400"
              style={{
                clipPath: "inset(0 50% 0 0)",
              }}
            />
          </div>
        )}

        {Array.from({
          length: maxStars - fullStars - (hasHalfStar ? 1 : 0),
        }).map((_, i) => (
          <Star key={`empty-${i}`} className="w-4 h-4 text-gray-200" />
        ))}

        <span className="text-sm text-gray-500 ml-1">
          ({data.rating.totalRating})
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
