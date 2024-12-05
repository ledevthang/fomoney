"use client";

import { useFetchUserSeasonInfo } from "@/hooks/useFetchUserSeasonInfo";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { useWallet } from "@solana/wallet-adapter-react";
import { DialogClose, DialogHeader } from "../ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import { KeySquareIcon, Loader2Icon, XIcon } from "lucide-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import Image from "next/image";
import sonicx from "../../../public/images/sonicx.png";

export default function UserInfo() {
  const { publicKey } = useWallet();
  const [open, setOpen] = useState(false);

  const { data, isLoading } = useFetchUserSeasonInfo();

  if (!publicKey) return null;

  return (
    <>
      <Button
        className="h-10 bg-[#512DA8] px-2 font-bold text-yellow-400"
        onClick={() => setOpen(true)}
        disabled={isLoading}
      >
        <KeySquareIcon />
        {isLoading ? (
          <Loader2Icon className="mr-2 animate-spin" />
        ) : (
          <span>{data?.key.toNumber() ?? 0}</span>
        )}
      </Button>
      <Dialog onOpenChange={setOpen} open={open}>
        <DialogPortal>
          <DialogOverlay className="fixed inset-0 bg-black/80" />
          <DialogContent
            aria-describedby="description"
            className="fixed left-1/2 top-1/3 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-[#6b59dd] p-4 shadow-lg"
          >
            <DialogHeader className="flex flex-row items-center justify-between">
              <DialogTitle className="text-left text-lg font-bold">
                My Balance
              </DialogTitle>
              <DialogClose aria-label="Close" className="!mt-0">
                <XIcon size={20} className="text-gray-200" />
              </DialogClose>
            </DialogHeader>
            <br />
            <div>
              <p className="text-center text-5xl font-bold text-yellow-400">
                {data?.point.toNumber().toLocaleString("en-US") ?? 0}{" "}
                <span className="font-sans text-lg">pts</span>
              </p>
            </div>
            <div className="mt-4 flex justify-between gap-2">
              <div className="flex-1 rounded-lg border border-yellow-400 px-2 py-1">
                <p className="text-xs">Keys</p>
                <div className="flex flex-row items-center justify-center gap-1 text-center text-3xl font-bold">
                  {data?.key.toNumber() ?? 0} <KeySquareIcon />
                </div>
              </div>
              <div className="flex-1 rounded-lg border border-yellow-400 px-2 py-1">
                <p className="text-xs">Deposited</p>
                <div className="flex items-center justify-center text-center text-3xl font-bold">
                  {(
                    (data?.deposited.toNumber() ?? 0) / LAMPORTS_PER_SOL
                  ).toFixed(2)}{" "}
                  <Image src={sonicx} width={24} height={24} alt="Sonic X" />
                </div>
              </div>
            </div>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </>
  );
}