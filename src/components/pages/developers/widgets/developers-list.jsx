import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useNavigate } from "react-router-dom";

const CreatorCardSkeleton = () => (
  <Card className="overflow-hidden pt-0">
    <Skeleton className="h-32 sm:h-40 w-full" />
    <CardHeader>
      <Skeleton className="h-5 w-2/3" />
      <Skeleton className="h-4 w-1/3 mt-2" />
    </CardHeader>
    <CardContent className="space-y-2">
      <Skeleton className="h-4 w-1/4" />
      <ul className="space-y-1">
        {[...Array(5)].map((_, i) => (
          <li key={i} className="flex justify-between items-center">
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-10" />
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const DeveloperCardList = ({ developers = [], isLoading }) => {
  const skeletonCount = 6;
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {isLoading
        ? Array.from({ length: skeletonCount }).map((_, i) => (
            <CreatorCardSkeleton key={i} />
          ))
        : developers?.map((developer) => (
            <Card
              key={developer?.id}
              className="overflow-hidden pt-0 cursor-pointer hover:shadow-lg"
              onClick={() => navigate(`/developers/${developer?.slug}`)}
            >
              <div
                className="h-32 sm:h-40 w-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${developer?.image_background})`,
                }}
              />
              <CardHeader>
                <CardTitle className="text-lg">{developer?.name}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {developer?.games_count} games published
                </p>
              </CardHeader>
              {/* <CardContent className="space-y-2">
                <p className="text-sm font-bold text-muted-foreground">
                  Popular titles:
                </p>
                <ul className="flex flex-wrap gap-2">
                  {developer?.games?.slice(0, 2)?.map((game) => (
                    <li key={game?.id}>
                      <Badge variant="secondary" className="text-xs">
                        <span>{game?.name}</span>
                        {game?.added?.toLocaleString()})
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardContent> */}
            </Card>
          ))}
    </div>
  );
};

export default DeveloperCardList;
