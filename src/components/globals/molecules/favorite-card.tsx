import { KeyboardType } from "@/schemas/keyboardSchema";
import { KeycapType } from "@/schemas/keycapSchema";
import { formatCurrencyVND } from "@/utils/formatter";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

interface FavoriteCardProps {
  variant: "keyboard" | "keycap";
  keyboard?: KeyboardType;
  keycap?: KeycapType;
  className?: string;
  onRemove?: (id: string, variant: "keyboard" | "keycap") => void;
}

function FavoriteCard({
  variant,
  keyboard,
  keycap,
  className,
  onRemove,
}: FavoriteCardProps) {
  const product = variant === "keyboard" ? keyboard : keycap;

  if (!product) {
    return null;
  }

  const productId =
    variant === "keyboard"
      ? (product as KeyboardType).keyboardId
      : (product as KeycapType).keycapId;

  const routePath =
    variant === "keyboard"
      ? `/keyboards/${productId}`
      : `/keycaps/${productId}`;

  const handleRemove = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (onRemove) {
      onRemove(productId, variant);
    }
  };

  const filteredImageUrls: string[] = product.images.map((item) => item.img);

  return (
    <div className={`flex flex-col ${className ?? ""}`}>
      <div className="relative h-60 overflow-hidden rounded-md select-none hover:cursor-pointer">
        <Link to={routePath}>
          <img
            src={filteredImageUrls[0]}
            alt="product"
            className="absolute top-0 left-0 h-full w-full object-cover opacity-100 transition-opacity hover:opacity-0"
          />
          <img
            src={filteredImageUrls[1]}
            alt="product-hover"
            className="absolute top-0 left-0 h-full w-full object-cover opacity-0 transition-opacity hover:opacity-100"
          />
        </Link>

        <span className="bg-o-primary absolute top-3 left-3 rounded px-2 py-1 text-xs text-white">
          - {product.discount}%
        </span>

        <div className="absolute top-2 right-2 rounded px-2 py-1 text-xs">
          <div
            className="bg-secondary flex items-center justify-center rounded-full p-[5px] transition-colors hover:cursor-pointer"
            onClick={handleRemove}
          >
            <X size={18} className="text-o-primary" />
          </div>
        </div>
      </div>

      <Link to={routePath} className="mt-4 w-fit">
        <span className="hover:text-o-primary font-medium uppercase duration-300 hover:cursor-pointer">
          {product.name}
        </span>
      </Link>

      <div className="flex items-center gap-2">
        <span className="text-o-primary font-medium">
          {formatCurrencyVND(product.newPrice)}
        </span>

        <span className="text-xs font-medium text-gray-400 line-through">
          {formatCurrencyVND(product.oldPrice)}
        </span>
      </div>
    </div>
  );
}

export default FavoriteCard;
