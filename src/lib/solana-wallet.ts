import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { IframeWalletAdapter } from "../../packages/sdk/src";
import { WALLET_ICON } from "@/components/icons";

const network = WalletAdapterNetwork.Devnet;

export const endpoint = clusterApiUrl(network);
export const wallets = [
  new PhantomWalletAdapter(),
  new IframeWalletAdapter("Iframe Wallet", WALLET_ICON),
];
