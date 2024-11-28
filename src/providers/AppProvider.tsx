"use client";

import { createAppKit } from "@reown/appkit/react";
import { SolanaAdapter } from "@reown/appkit-adapter-solana/react";
import {
  solana,
  solanaTestnet,
  solanaDevnet,
  sonicTestnet,
} from "@reown/appkit/networks";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { endpoint, wallets } from "@/lib/solana-wallet";

// Create a client
const queryClient = new QueryClient();

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets as any} autoConnect={true}>
        <WalletModalProvider>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
