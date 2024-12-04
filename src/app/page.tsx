import Link from "next/link";
import Image from "next/image";
import sonicx from "../../public/images/sonicx.png";
import { ArrowBigRight } from "lucide-react";
import TopRankings from "@/components/common/TopRankings";

export default function Home() {
  const prizedPool = 5000000;

  return (
    <div className="p-4">
      <div className="mb-10 mt-4 rounded-lg border-[1px] border-yellow-500 bg-white/10 px-2 py-4 shadow-lg backdrop-blur-xl">
        <h1 className="text-2xl font-bold text-yellow-400">
          Enjoy &quot;Lossless &<br /> Fun&quot; Gaming
        </h1>
        <div className="mt-10">
          <div className="flex items-center justify-between">
            <p>Prized Pool</p>
            <Link
              href={"/staking"}
              className="flex items-center gap-1 rounded-lg bg-red-500 px-2 text-sm"
            >
              Deposit
              <ArrowBigRight size={20} />
            </Link>
          </div>

          <div className="flex items-center justify-start gap-2 text-5xl font-bold text-yellow-500">
            <Image src={sonicx} width={32} height={32} alt="Sonic X" />
            <span className="font-digital text-shadow-blue">
              {prizedPool.toLocaleString("en-US")}
            </span>
          </div>
        </div>
      </div>
      <TopRankings />
    </div>
  );
}
