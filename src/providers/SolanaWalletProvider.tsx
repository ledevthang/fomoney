import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { endpoint, wallets } from "@/lib/solana-wallet";
import "@solana/wallet-adapter-react-ui/styles.css";
import { useIframeWalletHandler } from "@/hooks/useIframeWalletHandler";

export default function SolanaWalletProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useIframeWalletHandler();

  return (
    <ConnectionProvider
      config={{
        commitment: "finalized",
      }}
      endpoint={endpoint}
    >
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
