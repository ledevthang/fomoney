"use client";

import { Button } from "../ui/button";
import { WalletIcon } from "lucide-react";
import ConfirmationDialog from "@/components/common/ConfirmationDialog";
import { redirect } from "next/navigation";
import { useMemo, useState } from "react";
import { useUser } from "@/store/user";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { AuthProvider } from "@prisma/client";

export default function ButtonPlayKey() {
  const user = useUser();
  const { setVisible } = useWalletModal();

  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);

  const handleClickPlayWithKey = () => {
    // Open modal connnect Solana Wallet
    if (!user || user.provider !== AuthProvider.solana) {
      setVisible(true);
    } else {
      setOpenConfirmationModal(true);
    }
  };

  const buttonLabel = useMemo(() => {
    if (!user || user.provider !== AuthProvider.solana) {
      return "Play with Key";
    }
    return "Enter the Game";
  }, [user]);

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
        onConfirm={() => redirect("/game/play")}
        description="This will consume your balance of 1 KEY."
        confirmText="Play"
      />
    </>
  );
}
