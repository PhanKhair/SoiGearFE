import RatingStars from "@/components/globals/molecules/render-stars";
import { getStatusMeta, StatusEnum } from "@/constants/enum/Status";
import { KeyboardType } from "@/schemas/keyboardSchema";
import { KeycapType } from "@/schemas/keycapSchema";
import { formatCurrencyVND } from "@/utils/formatter";

interface informationDetailProps {
  className?: string;
  keyboard?: KeyboardType;
  keycap?: KeycapType;
}

function InformationDetail({
  className,
  keyboard,
  keycap,
}: informationDetailProps) {
  const product = keyboard || keycap;

  const { label, color } = getStatusMeta(
    product?.status || StatusEnum.InComing,
  );

  return (
    <div className={className}>
      <div className="space-y-4">
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
      </div>
    </div>
  );
}

export default InformationDetail;
