import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Wrench } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CreatorCard = ({ creator, loading = false }) => {
  const navigate = useNavigate();
  return (
    <div
      className="rounded-lg border border-foreground hover:shadow-lg cursor-pointer"
      onClick={() => navigate(`/creators/${creator?.slug}`)}
    >
      {loading ? (
        <Skeleton className="h-[100px] w-full rounded-t-lg" />
      ) : (
        <img
          src={creator?.image_background}
          className="h-[100px] w-full object-cover rounded-t-lg border border-b-foreground"
        />
      )}

      <div className="p-3 space-y-3">
        <div className="h-15 w-15 -mt-9">
          {loading ? (
            <Skeleton className="h-15 w-15 rounded-full" />
          ) : (
            <Avatar className="h-15 w-15">
              <AvatarImage src={creator.image} />
              <AvatarFallback>
                {creator?.name?.substring(2)?.toUpperCase()}
              </AvatarFallback>
            </Avatar>
          )}
        </div>

        <div className="flex items-center justify-between">
          {loading ? (
            <>
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-16" />
            </>
          ) : (
            <>
              <div className="font-bold">{creator.name}</div>
              <Badge>{creator?.games_count} games</Badge>
            </>
          )}
        </div>

        <div className="space-y-2">
          <div className="text-sm font-semibold">
            {loading ? (
              <Skeleton className="h-4 w-20" />
            ) : (
              `Roles (${creator?.positions?.length})`
            )}
          </div>
          <div className="flex flex-wrap gap-1">
            {loading
              ? Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <Skeleton key={i} className="h-6 w-16 rounded-md" />
                  ))
              : creator?.positions?.map((pos) => (
                  <Badge key={pos.id} variant="outline">
                    <Wrench />
                    {pos.name}
                  </Badge>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;
