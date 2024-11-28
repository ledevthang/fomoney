import { mockRankings } from "@/mock";
import axios from "axios";

export const fetchRankings = async (): Promise<Ranking[]> => {
  return mockRankings;
  const response = await axios.get("/api/rankings");
  return response.data;
};
