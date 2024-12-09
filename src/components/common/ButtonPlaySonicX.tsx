"use client";

import { Button } from "@/components/ui/button";
import sonicx from "../../../public/images/sonicx.png";
import Image from "next/image";
import { useUser } from "@/store/user";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { useState } from "react";
import { DialogHeader } from "../ui/dialog";
import { XIcon } from "lucide-react";
import { AuthProvider } from "@prisma/client";
import { toast } from "@/hooks/use-toast";

export default function ButtonPlaySonicX() {
  const user = useUser();
  const router = useRouter();
  const [openModalConnectSonicX, setOpenModalConnectSonicX] = useState(false);
  const handleClickPlay = () => {
    if (!user) {
      setOpenModalConnectSonicX(true);
      return;
    }

    if (user.provider !== AuthProvider.sonicx) {
      return toast({
        title: "Error",
        description: "You must connect your SonicX wallet to play",
        variant: "destructive",
        duration: 2000,
      });
    }

    router.push("/game/play");
  };

  return (
    <>
      <Button
        className="mx-auto h-12 w-[200px] bg-yellow-500 text-lg"
        onClick={handleClickPlay}
      >
        <Image src={sonicx} alt="FoMoney2048" width={20} />
        Play with SonicX
      </Button>
      <ModalConnectSonicX
        open={openModalConnectSonicX}
        onOpenChange={setOpenModalConnectSonicX}
      />
    </>
  );
}

const ModalConnectSonicX = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/60" />
        <DialogContent
          className={`fixed left-1/2 top-1/2 w-[90%] max-w-sm -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-[#10141f] py-4 shadow-lg`}
        >
          <DialogHeader className="flex w-full justify-end">
            <DialogClose className="flex justify-end px-4 text-right">
              <XIcon />
            </DialogClose>
            <DialogTitle className="mt-2 text-center text-2xl">
              Connect your SonicX wallet <br />
              to continue
            </DialogTitle>
          </DialogHeader>
          <div className="mt-10 flex cursor-pointer gap-2 px-4 py-2 hover:bg-[#1a1f2e]">
            <Image src={sonicx} alt="SonicX" width={28} />
            <p className="text-center text-lg">SonicX</p>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
