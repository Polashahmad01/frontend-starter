import { ReactNode, useEffect, useRef } from "react";

interface ModalProps {
  children: ReactNode;
  open: boolean;
  isShowCloseIcon?: boolean;
  onClose: () => void;
  closeOnOutSideClick?: boolean;
}

export default function Modal({
  open,
  onClose,
  children,
  closeOnOutSideClick = true,
  isShowCloseIcon = true,
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    dialog.showModal();

    const handleDialogClose = () => {
      onClose();
    };

    dialog.addEventListener("close", handleDialogClose);
    return () => dialog.removeEventListener("close", handleDialogClose);
  }, [onClose]);

  const handleClose = () => {
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (closeOnOutSideClick && e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };

  if (!open) {
    return null;
  }

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      className="backdrop:bg-black/50 backdrop:backdrop-blur-sm bg-transparent p-0 max-w-none max-h-none w-full h-full flex items-center justify-center border-0 outline-0"
    >
      <div className="bg-white rounded-md shadow-lg max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        {isShowCloseIcon && <button onClick={handleClose}>Close</button>}
        <div className="p-6">{children}</div>
      </div>
    </dialog>
  );
}
