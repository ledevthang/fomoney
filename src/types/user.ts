import { AuthProvider, Season } from "@prisma/client";

export interface Ranking {
  point: number;
  User: {
    id: string;
    wallet: string;
  };
}

export interface AuthRequest {
  provider: AuthProvider;
  credential: string;
}

export interface User {
  address: string;
  provider: AuthProvider;
  point?: number;
  season: string;
}

export interface RankingResponse {
  rankings: Ranking[];
  season: Season;
}
