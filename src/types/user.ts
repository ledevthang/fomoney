import { AuthProvider } from "@prisma/client";

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
}
