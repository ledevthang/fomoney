"use client";

import Image from "next/image";
import bannerGame from "../../public/images/banner-game.jpg";
import ButtonPlayKey from "@/components/common/ButtonPlayKey";
import ButtonPlaySonicX from "@/components/common/ButtonPlaySonicX";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  useAuth();

  return (
    <div className="">
      <Image src={bannerGame} alt="FoMoney2048" />
      <div className="mt-4 flex flex-col items-center justify-center gap-4">
        <ButtonPlaySonicX />
        <ButtonPlayKey />
      </div>
      <p className="mt-4 text-center">More games coming soon</p>
    </div>
  );
}
