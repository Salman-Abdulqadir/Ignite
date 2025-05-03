import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CreatorsAPI } from "@/apis/creators";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import RatingInfo from "./widgets/rating-info";
import PlatformPieChart from "./widgets/platform-progress";
import TimelineChart from "./widgets/timeline-chart";
import RatingsBreakdown from "./widgets/rating-breakdown";
import { Skeleton } from "@/components/ui/skeleton";

const CreatorDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: creator,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["creatorDetails", id],
    queryFn: async () => CreatorsAPI.getCreatorById(id),
    staleTime: 60 * 1000,
    cacheTime: 5 * 60 * 1000,
  });

  return (
    <div className="space-y-4 flex flex-col flex-1 items-start">
      <Button variant="ghost" onClick={() => navigate("/creators")}>
        <ArrowLeft />
        Back
      </Button>
      {isError ? (
        <div className="flex-1 w-full flex flex-col items-center justify-center gap-4">
          <h1>Creator not found</h1>
          <Button variant="ghost" onClick={() => navigate("/creators")}>
            <ArrowLeft />
            Go Back
          </Button>
        </div>
      ) : (
        <div className="flex-1 overflow-hidden space-y-4 w-full">
          {isLoading ? (
            <Skeleton className="h-[150px] w-full" />
          ) : (
            <img
              src={creator?.image_background}
              className="h-[150px] w-full object-cover rounded-t-lg"
            />
          )}
          <Avatar className="h-30 w-30 -mt-28 ml-6">
            {isLoading ? (
              <Skeleton className="h-full w-full rounded-full" />
            ) : (
              <>
                <AvatarImage src={creator?.image} />
                <AvatarFallback>
                  {creator?.name?.substring(2)?.toUpperCase()}
                </AvatarFallback>
              </>
            )}
          </Avatar>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">
              {isLoading ? <Skeleton className="w-40 h-8" /> : creator?.name}
            </h1>

            <RatingInfo
              isLoading={isLoading}
              rating={creator?.rating}
              ratingTop={creator?.rating_top}
              reviewsCount={creator?.reviews_count}
            />
          </div>
          <div className="text-sm text-muted-foreground">
            {isLoading ? (
              <Skeleton className="h-16 w-full" />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: creator?.description }} />
            )}
          </div>
          <RatingsBreakdown ratings={creator?.ratings} isLoading={isLoading} />
          <div className="flex *:flex-1 *:h-[350px] *:overflow-x-scroll gap-4">
            <PlatformPieChart
              platforms={creator?.platforms || []}
              isLoading={isLoading}
            />
            <TimelineChart data={creator?.timeline} isLoading={isLoading} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatorDetailsPage;
