"use client";

import { useFetchRankings } from "@/hooks/useFetchRankings";
import SectionTitle from "./SectionTitle";
import { useMemo } from "react";
import RankingListItem from "./RankingListItem";
import { Skeleton } from "../ui/skeleton";

export default function TopRankings() {
  const rankings = useFetchRankings();

  const renderPlacerholder = useMemo(
    () => (
      <>
        <Skeleton className="h-[20px] w-[100px] rounded-full" />
      </>
    ),
    [],
  );
  return (
    <div>
      <SectionTitle label="Top Rankers" />
      <div className="space-y-4">
        {rankings.isFetching
          ? renderPlacerholder
          : rankings.data?.map((data, index) => (
              <RankingListItem
                key={data.wallet}
                data={data}
                index={index + 1}
              />
            ))}
      </div>
    </div>
  );
}
