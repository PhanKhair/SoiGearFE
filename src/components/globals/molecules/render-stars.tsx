import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  maxStars?: number;
  size?: number;
  className?: string;
}

const RatingStars = ({
  rating,
  maxStars = 5,
  size = 16,
  className,
}: RatingStarsProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  const iconStyle = { width: `${size}px`, height: `${size}px` };

  return (
    <div className={`flex items-center gap-1 ${className ?? ""}`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star
          key={`full-${i}`}
          style={iconStyle}
          className="fill-yellow-400 text-yellow-400"
        />
      ))}

      {hasHalfStar && (
        <div key="half" className="relative" style={iconStyle}>
          <Star
            className="absolute top-0 left-0 fill-gray-200 text-gray-200"
            style={iconStyle}
          />
          <Star
            className="absolute top-0 left-0 fill-yellow-400 text-yellow-400"
            style={{ ...iconStyle, clipPath: "inset(0 50% 0 0)" }}
          />
        </div>
      )}

      {Array.from({
        length: maxStars - fullStars - (hasHalfStar ? 1 : 0),
      }).map((_, i) => (
        <Star key={`empty-${i}`} style={iconStyle} className="text-gray-200" />
      ))}
    </div>
  );
};

export default RatingStars;
