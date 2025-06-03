import Tag from "@/components/globals/atoms/tag";
import OverviewReview from "@/components/globals/molecules/overview-review";
import ProductReview from "@/components/globals/molecules/product-review";
import { cn } from "@/lib/utils";
import { OverviewReviewType, ReviewType } from "@/schemas/reviewSchema";

interface ReviewDetailProps {
  overview: OverviewReviewType;
  review: ReviewType[];
  className?: string;
}

function ReviewDetail({ overview, review, className }: ReviewDetailProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <Tag variant="more" label="Our Customer Reviews" />

      <OverviewReview overview={overview} />

      <ProductReview review={review} />
    </div>
  );
}

export default ReviewDetail;
