import Header from "./components/layouts/Header.tsx";
import PWABadge from "./PWABadge.tsx";
import { createAppKit } from "@reown/appkit/react";
import { SolanaAdapter } from "@reown/appkit-adapter-solana/react";
import { solana, solanaTestnet, solanaDevnet, sonicTestnet } from "@reown/appkit/networks";
import { NightlyWalletAdapter, PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import TabsNavigate from "./components/layouts/TabsNavigate.tsx";

// 0. Set up Solana Adapter
const solanaWeb3JsAdapter = new SolanaAdapter({
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	wallets: [new PhantomWalletAdapter(), new NightlyWalletAdapter()] as any,
});

// 1. Get projectId from https://cloud.reown.com
const projectId = "dc9f50da1da18f78b4666c304e3debf9";

// 2. Create a metadata object - optional
const metadata = {
	name: "FoMoney",
	description: "FoMoney PWA",
	url: "https://fomoney-pwa.com", // origin must match your domain & subdomain
	icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

// 3. Create modal
createAppKit({
	adapters: [solanaWeb3JsAdapter],
	networks: [sonicTestnet, solana, solanaTestnet, solanaDevnet],
	metadata: metadata,
	projectId,
	features: {
		analytics: true, // Optional - defaults to your Cloud configuration
		email: false,
		socials: false,
	},
});

function App() {
	return (
		<main className="h-screen bg-[url('bg.png')] bg-cover bg-center bg-no-repeat p-2">
			<>
				<Header />
				<TabsNavigate />
			</>
			<PWABadge />
		</main>
	);
}

export default App;
