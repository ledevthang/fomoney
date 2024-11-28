import { fetchRankings } from "@/services/user";
import { useQuery } from "@tanstack/react-query";

export const useFetchRankings = () => {
  return useQuery<Ranking[], Error>({
    queryKey: ["rankings"],
    queryFn: fetchRankings,
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    refetchOnWindowFocus: false,
  });
};
