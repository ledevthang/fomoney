"use client";

import { Button } from "../ui/button";
import { WalletIcon } from "lucide-react";
import ConfirmationDialog from "@/components/common/ConfirmationDialog";
import { redirect } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useUser, useUserActions } from "@/store/user";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { auth } from "@/services/user";
import { useMutation } from "@tanstack/react-query";
import { AuthProvider } from "@prisma/client";

export default function ButtonPlayKey() {
  const user = useUser();
  const { updateUser, setAccessToken } = useUserActions();
  const { setVisible } = useWalletModal();

  const { wallet, publicKey, disconnect } = useWallet();

  const mutateAuth = useMutation({
    mutationKey: ["auth"],
    mutationFn: auth,
    onSuccess: (data, variables) => {
      updateUser({
        provider: AuthProvider.solana,
        address: variables.credential!,
      });
      setAccessToken(data.accessToken);
    },
    onError: () => {
      disconnect();
    },
  });

  const handleLogin = useCallback(async (walletAddress: string) => {
    const response = await mutateAuth.mutateAsync({
      provider: AuthProvider.solana,
      credential: walletAddress,
    });
    return response.accessToken;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (publicKey) {
      handleLogin(publicKey.toBase58());
    }
  }, [wallet, publicKey, handleLogin]);

  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);

  const handleClickPlayWithKey = () => {
    // Open modal connnect Solana Wallet
    if (!user) {
      setVisible(true);
    } else {
      setOpenConfirmationModal(true);
    }
  };

  return (
    <>
      <Button
        onClick={handleClickPlayWithKey}
        className="mx-auto h-12 w-[200px] bg-[#512ca9] text-lg"
      >
        <WalletIcon />
        Play with Key
      </Button>
      <ConfirmationDialog
        open={openConfirmationModal}
        onOpenChange={setOpenConfirmationModal}
        // onConfirm={() => redirect("/game/play")}
        onConfirm={() => redirect("/game")}
        description="This will consume your balance of 1 KEY."
        confirmText="Play"
      />
    </>
  );
}
