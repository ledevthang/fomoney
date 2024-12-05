import { EQueryKey } from "@/constants";
import { PublicKey } from "@solana/web3.js";
import { useQuery } from "@tanstack/react-query";
import { useAnchor } from "./useAnchor";

export const useFetchUserSeasonInfo = () => {
  const { program } = useAnchor();

  const fetchTvlPoolData = useQuery({
    queryKey: [EQueryKey.tvlPoolData],
    queryFn: async () => {
      const [masterAccount] = PublicKey.findProgramAddressSync(
        [Buffer.from("authority")],
        program.programId,
      );
      const masterData = await program.account.master.fetch(masterAccount);

      const [seasonalTvlPool] = PublicKey.findProgramAddressSync(
        [
          Buffer.from("seasonal_tvl_pool_seed"),
          masterData.seasonId.toArrayLike(Buffer, "le", 8),
        ],
        program.programId,
      );
      const seasonalTvlPoolData =
        await program.account.seasonTvlPool.fetch(seasonalTvlPool);
      return seasonalTvlPoolData;
    },
  });

  return fetchTvlPoolData;
};
