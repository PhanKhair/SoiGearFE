import { KeycapType } from "@/schemas/keycapSchema";
import { formatCurrencyVND } from "@/utils/formatter";
import { Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import RatingStars from "./render-stars";

interface keycapCardProps {
  data: KeycapType;
}

function KeycapCard({ data }: keycapCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();

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

  return (
    <div className="flex flex-col">
      <div className="relative h-60 overflow-hidden rounded-md select-none hover:cursor-pointer">
        <Link to={`/keycaps/${data.keycapId}`}>
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
        </Link>

        <span className="bg-o-primary absolute top-3 left-3 rounded px-2 py-1 text-xs text-white">
          - {data.discount}%
        </span>

        <div className="absolute top-2 right-2 rounded px-2 py-1 text-xs">
          <div
            className={`flex items-center justify-center rounded-full p-[5px] transition-colors hover:cursor-pointer ${
              isFavorite ? "bg-o-primary" : "bg-secondary"
            }`}
            onClick={handleFavorite}
          >
            <Heart
              size={18}
              className={` ${isFavorite ? "text-white" : "text-o-primary"}`}
            />
          </div>
        </div>
      </div>

      <Link to={`/keycaps/${data.keycapId}`} className="mt-4 w-fit">
        <span className="hover:text-o-primary font-medium uppercase duration-300 hover:cursor-pointer">
          {data.name}
        </span>
      </Link>

      <div className="flex items-center gap-2">
        <span className="text-o-primary font-medium">
          {formatCurrencyVND(data.newPrice)}
        </span>

        <span className="text-xs font-medium text-gray-400 line-through">
          {formatCurrencyVND(data.oldPrice)}
        </span>
      </div>

      <div className="flex items-center gap-1">
        <RatingStars rating={data.rating.averageRating} />

        <span className="ml-1 text-sm text-gray-500">
          ({data.rating.totalRating})
        </span>
      </div>
    </div>
  );
}

export default KeycapCard;
