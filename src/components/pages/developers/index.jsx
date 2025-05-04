import { DeveloperAPI } from "@/apis/developers";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import DevelopersCardList from "./widgets/developers-list";
import PaginationWithNumbers from "@/components/ui/numbered-pagination";

const DevelopersPage = () => {
  const [query, setQuery] = useState({ page: 1, pageSize: 10, count: 0 });
  const {
    data,
    isLoading,
    refetch: getDevelopers,
  } = useQuery({
    queryKey: ["developers", JSON.stringify(query)],
    queryFn: async () => {
      const response = await DeveloperAPI.getDevelopers(query);
      setQuery((prev) => ({ ...prev, count: response?.count }));
      return response?.results;
    },

    staleTime: 60 * 1000,
    cacheTime: 5 * 60 * 1000,
  });
  const onPageChange = (page) => {
    setQuery((prev) => ({ ...prev, page: page }));
    getDevelopers();
  };

  return (
    <div className="flex-1 space-y-4">
      <h1 className="text-2xl font-bold">All Developers</h1>
      <DevelopersCardList developers={data} isLoading={isLoading} />
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

export default DevelopersPage;
