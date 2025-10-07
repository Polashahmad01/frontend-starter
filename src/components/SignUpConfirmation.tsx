import { useState } from "react";
import Modal from "./ui/Modal";

export default function SignUpConfirmation() {
  const [openModal, setOpenModal] = useState(true);

  const closeModal = () => {
    setOpenModal(!openModal);
  }

  return (
    <Modal open={openModal} onClose={closeModal} closeOnOutSideClick={false}>
      <div className="w-md">
        <h1>Sign Up Confirmation</h1>
      </div>
    </Modal>
  );
}
