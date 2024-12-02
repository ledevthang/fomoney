"use client";

import { useFetchRankings } from "@/hooks/useFetchRankings";
import SectionTitle from "./SectionTitle";
import { useMemo } from "react";
import RankingListItem from "./RankingListItem";
import { Loader2Icon } from "lucide-react";

export default function TopRankings() {
  const rankings = useFetchRankings();

  const renderPlacerholder = useMemo(
    () => (
      <div className="flex h-10 items-center justify-center gap-1">
        <Loader2Icon className="animate-spin" />
        Loading
      </div>
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
