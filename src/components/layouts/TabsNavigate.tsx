import { TABS } from "@/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Deposit from "./Deposit";
import Game from "./Game";

export default function TabsNavigate() {
	return (
		<Tabs defaultValue={TABS.deposit} className="w-full">
			<TabsList className="w-full bg-transparent">
				<TabsTrigger className="w-full" value={TABS.deposit}>
					Deposit
				</TabsTrigger>
				<TabsTrigger className="w-full" value={TABS.game}>
					Game
				</TabsTrigger>
			</TabsList>
			<TabsContent value={TABS.deposit}>
				<Deposit />
			</TabsContent>
			<TabsContent value={TABS.game}>
				<Game />
			</TabsContent>
		</Tabs>
	);
}
