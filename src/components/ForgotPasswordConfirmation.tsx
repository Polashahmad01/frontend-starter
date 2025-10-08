import { useState } from "react";
import Modal from "./ui/Modal";

export default function ForgotPasswordConfirmation() {
  const [openModal, setOpenModal] = useState(true);

  const closeModal = () => {
    setOpenModal(!openModal);
  }

  return (
    <Modal
      open={openModal}
      onClose={closeModal}
      closeOnOutSideClick={false}
      isShowCloseIcon={false}
    >
      <div className="flex flex-col max-w-md">
        <h2 className="text-xl font-bold leading-none tracking-normal opacity-80 md:text-xl">Password reset link sent</h2>
        <div className="mt-3 mb-2">
          <p className="text-sm leading-normal text-[#404040] tracking-normal">If an account with that email exists, we’ve sent a password reset link to your inbox.</p>
        </div>
        <div className="mb-2 text-sm leading-normal text-[#404040] tracking-normal">
          <p>Please check your email and follow the instructions to reset your password.</p>
        </div>
        <div className="mb-3 text-sm leading-normal text-[#404040] tracking-normal">
          <p>Didn’t get the email? Check your spam or junk folder, or try again after a few minutes.</p>
        </div>
        <div className="flex gap-2 sm:w-1/6">
          <button
            onClick={closeModal}
            className="text-sm w-full py-1.5 cursor-pointer rounded-full flex items-center justify-center text-white opacity-80 bg-[#000000] transition-all duration-400 hover:bg-[#f3f3f3] hover:text-[#000000]"
          >
            Got It
          </button>
        </div>
      </div>
    </Modal>
  );
}
