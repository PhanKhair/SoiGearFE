import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  maxStars?: number;
  className?: string;
}

const RatingStars = ({ rating, maxStars = 5, className }: RatingStarsProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  return (
    <div className={`flex items-center gap-1 ${className ?? ""}`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star
          key={`full-${i}`}
          className="h-4 w-4 fill-yellow-400 text-yellow-400"
        />
      ))}

      {hasHalfStar && (
        <div key="half" className="relative h-4 w-4">
          <Star className="absolute top-0 left-0 h-4 w-4 fill-gray-200 text-gray-200" />
          <Star
            className="absolute top-0 left-0 h-4 w-4 fill-yellow-400 text-yellow-400"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          />
        </div>
      )}

      {Array.from({ length: maxStars - fullStars - (hasHalfStar ? 1 : 0) }).map(
        (_, i) => (
          <Star key={`empty-${i}`} className="h-4 w-4 text-gray-200" />
        ),
      )}
    </div>
  );
};

export default RatingStars;
