import { formatDateToShortString } from "@/utils/formatter";
import { Avatar, AvatarFallback, AvatarImage } from "../atoms/avatar";
import RatingStars from "./render-stars";

interface ReviewCardProps {
  user: {
    name: string;
    avatar?: string;
  };
  rating: number;
  comment: string;
  createdAt: string;
}
function ReviewCard({ user, rating, comment, createdAt }: ReviewCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.avatar} />
            <AvatarFallback>{user.name}</AvatarFallback>
          </Avatar>

          <div>
            <p className="text-primary text-lg font-medium">{user.name}</p>
            <p className="text-o-primary/50 text-sm font-medium">
              {formatDateToShortString(createdAt)}
            </p>
          </div>
        </div>

        <RatingStars rating={rating} />
      </div>

      <p className="text-primary">{comment}</p>
    </div>
  );
}

export default ReviewCard;
