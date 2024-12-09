import Image from "next/image";
import bannerGame from "../../public/images/banner-game.jpg";
import { Button } from "@/components/ui/button";
import sonicx from "../../public/images/sonicx.png";
import ButtonPlayKey from "@/components/common/ButtonPlayKey";

export default function Home() {
  return (
    <div className="">
      <Image src={bannerGame} alt="FoMoney2048" />
      <div className="mt-4 flex flex-col items-center justify-center gap-4">
        <Button className="mx-auto h-12 w-[200px] bg-yellow-500 text-lg">
          <Image src={sonicx} alt="FoMoney2048" width={20} />
          Play with SonicX
        </Button>
        <ButtonPlayKey />
      </div>
      <p className="mt-4 text-center">More games coming soon</p>
    </div>
  );
}
