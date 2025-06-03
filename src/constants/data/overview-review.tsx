import { OverviewReviewType } from "@/schemas/reviewSchema";

export const sampleOverviewReviewData: OverviewReviewType = {
  reviewId: "123",
  productId: "234",
  totalRating: 120,
  averageRating: 4.5,
  rating: {
    oneStar: 3,
    twoStar: 2,
    threeStar: 10,
    fourStar: 25,
    fiveStar: 80,
  },
};
