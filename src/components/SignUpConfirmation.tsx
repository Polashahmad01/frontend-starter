import { useState } from "react";
import Modal from "./ui/Modal";
import { useAppSelector } from "../store/hooks/useStore";
import { useResendVerificationEmail } from "../hooks/useResendVerificationEmail";

export default function SignUpConfirmation() {
  const { user } = useAppSelector((state) => state.auth);
  const [openModal, setOpenModal] = useState(true);
  const { isResendVerificationEmailPending, resendVerificationEmailMutation } = useResendVerificationEmail();

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
        <h2 className="text-xl font-bold leading-none tracking-normal opacity-80 md:text-xl">Verify your email</h2>
        <div className="mt-3 mb-2">
          <p className="text-sm leading-normal text-[#404040] tracking-normal">We just sent a verification link to {user?.email}. Please verify your email to activate your account.</p>
        </div>
        <div className="mb-3 text-sm leading-normal text-[#404040] tracking-normal">
          <p>If you don’t see it within a few minutes, check your spam folder or click below to resend.</p>
        </div>
        <div className="flex gap-2 sm:w-4/6">
          <button
            disabled={isResendVerificationEmailPending}
            onClick={() => resendVerificationEmailMutation()}
            className="text-sm w-full py-1.5 cursor-pointer rounded-full flex items-center justify-center text-white opacity-80 bg-[#000000] transition-all duration-400 hover:bg-[#f3f3f3] hover:text-[#000000] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isResendVerificationEmailPending ? "Resending..." : "Resend Email"}
          </button>
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
