import { useMutation } from "@tanstack/react-query";
import { forgotPasswordWithEmail } from "../services/authService";
import { notify } from "../utils/notify";

export const useForgotPassword = () => {
  const {
    mutateAsync: forgotPasswordMutation,
    isPending: forgotPasswordPending,
  } = useMutation({
    mutationKey: ["auth"],
    mutationFn: forgotPasswordWithEmail,
    onSuccess: (data) => {
      notify("success", data.message);
    },
    onError: (error: { error: { code: string; message: string } }) => {
      notify("error", error.error.message);
    },
  });

  return {
    forgotPasswordPending,
    forgotPasswordMutation,
  };
};
