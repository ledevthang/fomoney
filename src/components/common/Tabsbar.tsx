import { LuDatabase, LuGamepad2 } from "react-icons/lu";
import TabItem from "./TabItem";

export default function Tabsbar() {
  return (
    <div className="flex w-full justify-between border-y-[1px] border-purple-600 py-4 text-center text-white">
      <TabItem
        value="deposit"
        href="/deposit"
        icon={<LuDatabase size={24} />}
        label="Deposit"
        className="flex-1 text-lg"
      />
      <TabItem
        className="flex-1 text-lg"
        value="game"
        href="/game"
        icon={<LuGamepad2 size={28} />}
        label="Game"
      />
    </div>
  );
}
