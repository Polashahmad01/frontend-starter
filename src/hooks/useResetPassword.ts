import { useMutation } from "@tanstack/react-query";
import { resetPasswordWithEmail } from "../services/authService";
import { notify } from "../utils/notify";

export const useResetPassword = () => {
  const {
    mutateAsync: resetPasswordMutation,
    isPending: resetPasswordIsPending,
  } = useMutation({
    mutationFn: resetPasswordWithEmail,
    onSuccess: (data) => {
      notify("success", data.message);
      console.log("data", data);
    },
    onError: (error: { error: { code: string; message: string } }) => {
      notify("error", error.error.message);
      console.log("error", error);
    },
  });

  return {
    resetPasswordIsPending,
    resetPasswordMutation,
  };
};
