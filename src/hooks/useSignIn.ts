import { useMutation } from "@tanstack/react-query";
import { signInWithEmailPassword } from "../services/authService";
import { useAppDispatch } from "../store/hooks/useStore";
import { loginSuccess, loginFailure } from "../store/slices/authSlice";
import { notify } from "../utils/notify";

export const useSignIn = () => {
  const dispatch = useAppDispatch();

  const {
    mutateAsync: signInWithEmailPasswordMutation,
    isPending: signInPending,
  } = useMutation({
    mutationKey: ["auth"],
    mutationFn: signInWithEmailPassword,
    onSuccess: (data) => {
      dispatch(loginSuccess(data));
      notify("success", "Login successful");
      console.log("data", data);
    },
    onError: (error: { error: { code: string; message: string } }) => {
      dispatch(loginFailure(error.error));
      notify("error", error.error.message);
      console.log("error", error.error);
    },
  });

  return {
    signInPending,
    signInWithEmailPasswordMutation,
  };
};
