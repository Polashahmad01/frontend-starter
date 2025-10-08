import { useMutation } from "@tanstack/react-query";
import { notify } from "../utils/notify";
import { forgotPassword } from "../services/authService";
import { BaseErrorResponse } from "../types";

export const useForgotPassword = () => {

  const {
    mutateAsync: forgotPasswordMutation,
    isPending: isForgotPasswordPending
  } = useMutation({
    mutationKey: ["auth"],
    mutationFn: forgotPassword,
    onSuccess: (data) => {
      notify("success", data.message);
    },
    onError: (error: unknown) => {
      const errorData = error as BaseErrorResponse;
      notify("error", errorData.error.message);
    }
  });

  return {
    isForgotPasswordPending,
    forgotPasswordMutation
  }
}
