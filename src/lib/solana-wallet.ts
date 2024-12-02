import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

export const networks = [
  { name: "mainnet-beta", value: `${process.env.NODE_API_KEY}` },
  { name: "devnet", value: "https://api.devnet.solana.com" },
  { name: "sonic-testnet", value: "https://devnet.sonic.game" },
];

const network = WalletAdapterNetwork.Devnet;

export const endpoint = clusterApiUrl(network);
export const wallets = [new PhantomWalletAdapter()];
