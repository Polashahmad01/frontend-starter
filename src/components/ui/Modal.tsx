import { ReactNode, useEffect } from "react";

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
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [open, onClose]);

  const handleClose = () => {
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOutSideClick && e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!open) {
    return null;
  }

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <div className="bg-white rounded-md shadow-lg max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto relative">
        {isShowCloseIcon && (
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
