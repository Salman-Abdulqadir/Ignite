import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { ThumbsUp, Star, Meh, ThumbsDown } from "lucide-react";

const iconMap = {
  exceptional: <Star className="h-5 w-5 text-yellow-500" />,
  recommended: <ThumbsUp className="h-5 w-5 text-green-500" />,
  meh: <Meh className="h-5 w-5 text-gray-500" />,
  skip: <ThumbsDown className="h-5 w-5 text-red-500" />,
};

const RatingsBreakdown = ({ ratings = [], isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex flex-row gap-4 overflow-x-auto">
        {[...Array(4)].map((_, index) => (
          <Card key={index} className="min-w-[180px] flex-1">
            <CardContent className="space-y-2 pt-4">
              <div className="flex items-center gap-2 text-sm font-medium capitalize">
                <Skeleton className="w-5 h-5" />
                <Skeleton className="w-16 h-4" />
              </div>
              <div className="text-xs text-muted-foreground">
                <Skeleton className="w-16 h-4" />
              </div>
              <Skeleton className="h-2 w-full" />
              <div className="text-xs text-right text-muted-foreground">
                <Skeleton className="w-12 h-4" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-row gap-4 overflow-x-auto">
      {ratings.map((rating) => (
        <Card key={rating.id} className="min-w-[180px] flex-1">
          <CardContent className="space-y-2 pt-4">
            <div className="flex items-center gap-2 text-sm font-medium capitalize">
              {iconMap[rating.title] ?? null}
              {rating.title}
            </div>
            <div className="text-xs text-muted-foreground">
              {rating.count.toLocaleString()} votes
            </div>
            <Progress value={rating.percent} className="h-2" />
            <div className="text-xs text-right text-muted-foreground">
              {rating.percent.toFixed(1)}%
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default RatingsBreakdown;
