import { KeyboardType } from "@/schemas/keyboardSchema";
import { formatCurrencyVND } from "@/utils/formatter";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RatingStars from "./render-stars";
import {
  addKeyboardToFavorite,
  isKeyboardInFavorite,
} from "@/contexts/FavoriteContext";

interface keyboardCardProps {
  data: KeyboardType;
}

function KeyboardCard({ data }: keyboardCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (data?.keyboardId) {
      setIsFavorite(isKeyboardInFavorite(data.keyboardId));
    }
  }, [data]);

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === "favoriteChanged" && event.newValue === "true") {
        if (data?.keyboardId) {
          setIsFavorite(isKeyboardInFavorite(data.keyboardId));
        }
        localStorage.setItem("favoriteChanged", "false");
      }
    };

    window.addEventListener("storage", handleStorage);

    if (
      localStorage.getItem("favoriteChanged") === "true" &&
      data?.keyboardId
    ) {
      setIsFavorite(isKeyboardInFavorite(data.keyboardId));
      localStorage.setItem("favoriteChanged", "false");
    }

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, [data]);

  const handleFavorite = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    if (!data?.keyboardId) return;

    addKeyboardToFavorite(data.keyboardId);
    setIsFavorite(isKeyboardInFavorite(data.keyboardId));
  };

  return (
    <div className="flex flex-col">
      <div className="relative h-60 overflow-hidden rounded-md select-none hover:cursor-pointer">
        <Link to={`/keyboards/${data.keyboardId}`}>
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

      <Link to={`/keyboards/${data.keyboardId}`} className="mt-4 w-fit">
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

export default KeyboardCard;
