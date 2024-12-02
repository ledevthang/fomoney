import { AuthProvider } from "./../../node_modules/.prisma/client/index.d";
import { Ranking } from "@/types/user";
import axios from "axios";

export const fetchRankings = async (): Promise<Ranking[]> => {
  const response = await axios.get("/api/ranking");
  return response.data;
};

export const auth = async ({
  provider,
  credential,
}: {
  provider: AuthProvider;
  credential?: string;
}): Promise<{ accessToken: string }> => {
  const response = await axios.post("/api/auth", {
    provider,
    credential,
  });
  return response.data;
};
