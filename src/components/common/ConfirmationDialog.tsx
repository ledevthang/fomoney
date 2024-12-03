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

interface ConfirmationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string; // Customizable title
  description?: string; // Customizable description
  confirmText?: string; // Customizable confirm button text
  cancelText?: string; // Customizable cancel button text
  onConfirm: () => void; // Confirm action
  width?: string; // Custom width for the dialog
}

export default function ConfirmationDialog({
  open,
  onOpenChange,
  title = "Are you sure?",
  description = "This action cannot be undone.",
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  width = "max-w-lg", // Default width class
}: ConfirmationDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        {/* Overlay with full-screen coverage */}
        <DialogOverlay className="fixed inset-0 bg-black/60" />

        {/* Dialog Content centered */}
        <DialogContent
          className={`fixed left-1/2 top-1/2 w-[90%] ${width} -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white p-4 shadow-lg`}
        >
          <DialogHeader>
            <DialogTitle className="text-left text-lg font-bold text-black">
              {title}
            </DialogTitle>
            <DialogDescription className="mt-2 text-left text-sm text-gray-600">
              {description}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 flex w-full justify-end gap-2">
            <Button
              className="bg-gray-300 text-black hover:bg-gray-400"
              onClick={() => onOpenChange(false)}
            >
              {cancelText}
            </Button>
            <Button
              className="bg-yellow-600 text-white hover:bg-yellow-700"
              onClick={() => {
                onConfirm();
                onOpenChange(false); // Close dialog after confirm
              }}
            >
              {confirmText}
            </Button>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
