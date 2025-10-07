import { ReactNode } from "react";
import { Modal as ModalComponent } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

interface ModalProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  closeOnOutSideClick?: boolean;
}

export default function Modal({ open, onClose, children, closeOnOutSideClick }: ModalProps) {
  return (
    <ModalComponent
      center
      open={open}
      onClose={onClose}
      closeOnOverlayClick={closeOnOutSideClick}
      styles={{ modal: {
        borderRadius: "6px",
      } }}
    >
      {children}
    </ModalComponent>
  )
}
