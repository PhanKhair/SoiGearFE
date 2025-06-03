import { ReviewType } from "@/schemas/reviewSchema";
import ReviewCard from "./review-card";

interface ProductReviewProps {
  review: ReviewType[];
}

function ProductReview({ review }: ProductReviewProps) {
  return (
    <div className="space-y-6">
      {review.map((rv, index) => (
        <div key={index} className="border-secondary border-b-2 pb-2">
          <ReviewCard
            comment={rv.comment}
            user={rv.user}
            createdAt={rv.createdAt}
            rating={rv.rating}
          />
        </div>
      ))}
    </div>
  );
}

export default ProductReview;
