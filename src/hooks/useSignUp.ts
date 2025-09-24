import { useMutation } from "@tanstack/react-query";
import { signUpWithEmailPassword } from "../services/authService";
import { useAppDispatch } from "../store/hooks/useStore";
import { loginSuccess, loginFailure } from "../store/slices/authSlice";
import { notify } from "../utils/notify";

export const useSignUp = () => {
  const dispatch = useAppDispatch();

  const {
    mutateAsync: signUpWithEmailPasswordMutation,
    isPending: signUpPending,
  } = useMutation({
    mutationKey: ["auth"],
    mutationFn: signUpWithEmailPassword,
    onSuccess: (data) => {
      dispatch(loginSuccess(data));
      notify("success", data.message);
      console.log("data", data);
    },
    onError: (error: { error: { code: string; message: string } }) => {
      dispatch(loginFailure(error.error));
      notify("error", error.error.message);
    },
  });

  return {
    signUpPending,
    signUpWithEmailPasswordMutation,
  };
};
