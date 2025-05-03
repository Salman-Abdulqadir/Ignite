import React from "react";
import { CreatorsAPI } from "@/apis/creators";
import { useCreators } from "@/components/pages/creators/states";
import { useQuery } from "@tanstack/react-query";
import CreatorCard from "./widgets/creator-card";
import PaginationWithNumbers from "@/components/ui/numbered-pagination";

const CreatorsPage = () => {
  const { creators = [], setCreators, query, setQuery } = useCreators();
  const { isLoading, refetch: getCreators } = useQuery({
    queryKey: ["creators", JSON.stringify(query)],
    queryFn: async () => {
      const response = await CreatorsAPI.getCreators(query);
      setCreators(response?.results || []);
      setQuery({ ...query, count: response.count });
      return response;
    },

    staleTime: 60 * 1000,
    cacheTime: 5 * 60 * 1000,
  });

  const onPageChange = (page) => {
    setQuery({ ...query, page: page });
    getCreators();
  };
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">All Game Creators</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {isLoading
          ? new Array(8)
              .fill(0)
              .map((creator) => <CreatorCard loading key={creator?.id} />)
          : creators.map((creator) => (
              <CreatorCard creator={creator} key={creator?.id} />
            ))}
      </div>
      <PaginationWithNumbers
        className={"flex justify-end mt-3"}
        page={query?.page}
        pageSize={query?.page_size}
        count={query?.count}
        onPageChange={onPageChange}
        loading={isLoading}
      />
    </div>
  );
};

export default CreatorsPage;
