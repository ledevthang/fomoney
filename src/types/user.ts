import { AuthProvider } from "@prisma/client";

export interface Ranking {
  name: string;
  image: string;
  points: number;
  wallet: string;
}

export interface AuthRequest {
  provider: AuthProvider;
  credential: string;
}

export interface User {
  address: string;
  provider: AuthProvider;
}
