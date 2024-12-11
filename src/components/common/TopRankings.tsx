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

  const renderList = useMemo(() => {
    if (rankings.data?.length === 0)
      return (
        <div className="flex h-10 items-center justify-center gap-1">
          No records found
        </div>
      );
    return (
      <div className="space-y-4">
        {rankings.isFetching
          ? renderPlacerholder
          : rankings.data?.map((data, index) => (
              <RankingListItem
                key={data.User.id}
                data={data}
                index={index + 1}
              />
            ))}
      </div>
    );
  }, [rankings]);

  return (
    <div className="p-4">
      <SectionTitle label="Leaderboard" />
      {renderList}
    </div>
  );
}
