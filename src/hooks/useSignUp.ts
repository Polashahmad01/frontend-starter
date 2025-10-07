import { useMutation } from "@tanstack/react-query";
import { notify } from "../utils/notify";
import { useAppDispatch } from "../store/hooks/useStore";
import { loginSuccess, loginFailure } from "../store/slices/authSlice";
import { signUpWithEmailPassword } from "../services/authService";
import { BaseErrorResponse } from "../types";

export const useSignUp = () => {
  const dispatch = useAppDispatch();

  const {
    mutateAsync: signUpWithEmailPasswordMutation,
    isPending: isSignUpPending,
    isSuccess: isSignUpSuccess
  } = useMutation({
    mutationKey: ["auth"],
    mutationFn: signUpWithEmailPassword,
    onSuccess: (data) => {
      dispatch(loginSuccess(data));
      notify("success", data.message);
    },
    onError: (error: unknown) => {
      const errorData = error as BaseErrorResponse;
      dispatch(loginFailure(errorData));
      notify("error", errorData.error.message);
    },
  });

  return {
    isSignUpSuccess,
    isSignUpPending,
    signUpWithEmailPasswordMutation
  }
}
