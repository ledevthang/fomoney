"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import DepositResultDialog from "./DepositResultDialog";
import { useToast } from "@/hooks/use-toast";
import ConfirmationDialog from "./ConfirmationDialog";

export default function DepositForm() {
  const [openResultModal, setOpenResultModal] = useState(false);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [value, setValue] = useState("");
  const { toast } = useToast();

  const handleClickDeposit = () => {
    if (!value || +value <= 0) {
      return toast({
        title: "Error",
        description: "Please enter a valid amount to deposit",
        variant: "destructive",
        duration: 1500,
      });
    }

    setOpenConfirmationModal(true);
  };

  const startDeposit = () => {
    setOpenResultModal(true);
  };
  return (
    <div className="relative rounded-lg border-[1px] border-gray-500 p-4">
      <p className="mb-4 text-xl font-bold">Deposit</p>
      <div className="relative w-full">
        <Input
          type="number"
          placeholder="Enter amount to deposit"
          className="pr-10"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          min={0}
          inputMode="numeric"
          required
        />
        <p className="absolute right-3 top-1/2 -translate-y-1/2 rounded bg-gray-400 px-2 text-sm text-white">
          SOL
        </p>
      </div>
      <Button
        className="mt-4 w-full bg-yellow-600 hover:bg-yellow-600 hover:opacity-80"
        onClick={handleClickDeposit}
      >
        Deposit
      </Button>
      <ConfirmationDialog
        open={openConfirmationModal}
        onOpenChange={setOpenConfirmationModal}
        onConfirm={startDeposit}
        width="max-w-sm"
        description={`You are about to deposit ${value} SOL.`}
      />
      <DepositResultDialog
        open={openResultModal}
        onOpenChange={setOpenResultModal}
      />
    </div>
  );
}
