import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Skeleton } from "@/components/ui/skeleton";
import { Star } from "lucide-react";

const RatingInfo = ({ rating, ratingTop, reviewsCount, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Skeleton className="w-4 h-4 rounded-full" />
          <Skeleton className="w-10 h-4" />
          <Skeleton className="w-6 h-4" />
        </div>
        <Skeleton className="w-24 h-6 rounded-md" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1 text-yellow-500">
        <Star className="w-4 h-4 fill-yellow-500" />
        <span className="font-semibold text-foreground">{rating}</span>
        <span className="text-sm text-muted-foreground">/ {ratingTop}</span>
      </div>

      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="outline" className="cursor-default">
            {reviewsCount?.toLocaleString()} reviews
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          Based on {reviewsCount?.toLocaleString()} user reviews
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default RatingInfo;
