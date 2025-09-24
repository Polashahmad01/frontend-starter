import { useMutation } from "@tanstack/react-query";
import { verifyEmail } from "../services/authService";
import { notify } from "../utils/notify";

export const useVerifyEmail = () => {

  const { mutate: verifyEmailMutation, isPending: verifyEmailPending } = useMutation({
    mutationKey: ["auth"],
    mutationFn: verifyEmail,
    onSuccess: (data) => {
      notify("success", data.message);
    },
    onError: (error: { error: { code: string; message: string } }) => {
      notify("error", error.error.message);
    },
  });

  return {
    verifyEmailPending,
    verifyEmailMutation,
  }
}