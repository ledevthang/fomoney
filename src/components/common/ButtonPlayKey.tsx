"use client";

import { Button } from "../ui/button";
import { WalletIcon } from "lucide-react";
import ConfirmationDialog from "@/components/common/ConfirmationDialog";
import { redirect } from "next/navigation";
import { useMemo, useState } from "react";
import { useUser } from "@/store/user";
import { AuthProvider } from "@prisma/client";
import { toast } from "@/hooks/use-toast";

export default function ButtonPlayKey() {
  const user = useUser();

  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);

  const handleClickPlayWithKey = () => {
    return toast({
      title: "Coming soon!",
      description: "Please try again later",
      duration: 2000,
    });

    // Open modal connnect Solana Wallet
    // if (!user || user.provider !== AuthProvider.solana) {
    //   setVisible(true);
    // } else {
    //   setOpenConfirmationModal(true);
    // }
  };

  const buttonLabel = useMemo(() => {
    if (!user || user.provider !== AuthProvider.solana) {
      return "Play with Key";
    }
    return "Enter the Game";
  }, [user]);

  const handleConsumeKey = () => {
    redirect("/game/play");
  };

  return (
    <>
      <Button
        onClick={handleClickPlayWithKey}
        className="mx-auto h-12 w-[200px] bg-[#512ca9] text-lg"
      >
        <WalletIcon />
        {buttonLabel}
      </Button>
      <ConfirmationDialog
        open={openConfirmationModal}
        onOpenChange={setOpenConfirmationModal}
        onConfirm={handleConsumeKey}
        description="This will consume your balance of 1 KEY."
        confirmText="Play"
      />
    </>
  );
}
