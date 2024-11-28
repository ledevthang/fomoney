import SectionTitle from "@/components/common/SectionTitle";
import Image from "next/image";
import sonicx from "../../../public/images/sonicx.png";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DepositForm from "@/components/common/DepositForm";
import WithdrawForm from "@/components/common/WithdrawForm";

export default function DepositPage() {
  const totalValueLocked = 200000000;
  const prizedPool = 5000000;
  return (
    <div className="py-4">
      <SectionTitle label="Deposit" />
      <div className="rounded-lg border-2 border-yellow-500 p-4">
        <div className="text-center">
          <p className="text-xl font-bold">Total Value Locked</p>
          <div className="flex items-center justify-center gap-2 text-5xl font-bold text-yellow-500">
            <Image src={sonicx} width={48} height={48} alt="Sonic X" />
            <span className="font-digital text-shadow-blue">
              {totalValueLocked.toLocaleString("en-US")}
            </span>
          </div>
        </div>
        <div className="my-4 h-[2px] w-full bg-yellow-500" />
        <div className="text-center">
          <p className="text-xl font-bold">Prized Pool</p>
          <div className="flex items-center justify-center gap-2 text-5xl font-bold text-yellow-500">
            <Image src={sonicx} width={48} height={48} alt="Sonic X" />
            <span className="font-digital text-shadow-blue">
              {prizedPool.toLocaleString("en-US")}
            </span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="deposit" className="mt-10 w-full">
        <TabsList className="w-full">
          <TabsTrigger className="flex-1" value="deposit">
            Deposit
          </TabsTrigger>
          <TabsTrigger className="flex-1" value="withdraw">
            Withdraw
          </TabsTrigger>
        </TabsList>
        <TabsContent value="deposit">
          <DepositForm />
        </TabsContent>
        <TabsContent value="withdraw">
          <WithdrawForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
