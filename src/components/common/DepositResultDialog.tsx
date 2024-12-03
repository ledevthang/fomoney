import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@radix-ui/react-dialog";
import { DialogHeader } from "../ui/dialog";
import { Button } from "../ui/button";

interface DepositResultDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function DepositResultDialog({
  open,
  onOpenChange,
}: DepositResultDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        {/* Overlay with full-screen coverage */}
        <DialogOverlay className="fixed inset-0 bg-black/60" />

        {/* Dialog Content centered */}
        <DialogContent className="fixed left-1/2 top-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white p-4 shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-left text-lg font-bold text-black">
              Deposit Successful!
            </DialogTitle>
            <DialogDescription className="mt-2 text-sm text-gray-600">
              Your deposit has been successfully processed.
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={() => onOpenChange(false)}
            className="mt-4 w-full bg-yellow-600 hover:bg-yellow-600 hover:opacity-80"
          >
            Close
          </Button>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
