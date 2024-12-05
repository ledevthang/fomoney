"use client";

import ConfirmationDialog from "@/components/common/ConfirmationDialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { redirect } from "next/navigation";
import Image from "next/image";
import bannerGame from "../../../public/images/banner-game.jpg";

export default function GamePage() {
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);

  return (
    <div className="">
      <Image src={bannerGame} alt="FoMoney2048" />
      <div className="mt-4 flex justify-center">
        <Button
          className="mx-auto w-[200px] bg-yellow-500 text-lg"
          onClick={() => setOpenConfirmationModal(true)}
        >
          Play
        </Button>
      </div>

      <ConfirmationDialog
        open={openConfirmationModal}
        onOpenChange={setOpenConfirmationModal}
        onConfirm={() => redirect("/game/play")}
        description="This will consume your balance of 1 KEY."
        confirmText="Play"
      />
    </div>
  );
}
