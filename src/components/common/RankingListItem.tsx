import { Ranking } from "@/types/user";
import { shortenWalletAddress } from "@/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

interface RankingListItemProps {
  data: Ranking;
  index: number;
}
export default function RankingListItem({ data, index }: RankingListItemProps) {
  const { image, points, wallet } = data;

  return (
    <div className="flex items-center justify-between rounded bg-white/10 p-2 shadow-xl backdrop-blur-xl">
      <div className="flex items-center gap-2 font-semibold">
        <p>{index}</p>
        <Avatar>
          <AvatarImage
            src={image}
            width={28}
            height={28}
            className="rounded-full"
          />
          <AvatarFallback>{wallet.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <p>{shortenWalletAddress(wallet, 4)}</p>
      </div>
      <p className="font-semibold text-yellow-400">
        {points.toLocaleString("en-US")}{" "}
        <span className="text-xs text-gray-400">pts</span>
      </p>
    </div>
  );
}
