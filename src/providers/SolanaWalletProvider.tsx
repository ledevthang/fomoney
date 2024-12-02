/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { endpoint, wallets } from "@/lib/solana-wallet";
import "@solana/wallet-adapter-react-ui/styles.css";

export default function SolanaWalletProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConnectionProvider
      config={{
        commitment: "confirmed",
      }}
      endpoint={endpoint}
    >
      <WalletProvider wallets={wallets as any} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
