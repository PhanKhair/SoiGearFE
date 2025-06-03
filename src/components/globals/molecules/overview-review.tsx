import { OverviewReviewType } from "@/schemas/reviewSchema";
import RatingStars from "./render-stars";
import { Progress } from "../atoms/progress";

interface OverviewReviewProps {
  overview: OverviewReviewType;
}

function OverviewReview({ overview }: OverviewReviewProps) {
  const ratingEntries = [
    { star: 5, count: overview.rating.fiveStar },
    { star: 4, count: overview.rating.fourStar },
    { star: 3, count: overview.rating.threeStar },
    { star: 2, count: overview.rating.twoStar },
    { star: 1, count: overview.rating.oneStar },
  ];

  return (
    <div className="grid w-full grid-cols-2 gap-10">
      <div className="bg-secondary col-span-2 flex flex-col items-center justify-center gap-4 rounded-lg px-6 py-4 xl:col-span-1">
        <p className="text-o-primary text-4xl font-bold">
          {overview.averageRating}
        </p>

        <RatingStars
          rating={overview.averageRating}
          size={25}
          className="gap-4"
        />
        <p className="text-lg font-medium">{overview.totalRating} ratings</p>
      </div>

      <div className="col-span-2 flex flex-col items-center justify-between gap-4 xl:col-span-1">
        {ratingEntries.map(({ star, count }) => {
          const percent =
            overview.totalRating === 0
              ? 0
              : (count / overview.totalRating) * 100;
          return (
            <div key={star} className="grid w-full grid-cols-11 items-center">
              <p className="col-span-1 text-sm font-medium">{star}.0</p>
              <Progress value={percent} className="col-span-8" />
              <p className="col-span-2 text-right text-xs font-medium sm:text-sm">
                {count} reviews
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OverviewReview;
