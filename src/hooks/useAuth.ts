import { useMutation } from "@tanstack/react-query";
import { signInWithEmailPassword } from "../services/authService";
import { useAppDispatch } from "../store/hooks/useStore";
import { loginSuccess, loginFailure } from "../store/slices/authSlice";
import { notify } from "../utils/notify";

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const {
    mutateAsync: signInWithEmailPasswordMutation,
    isPending: signInPending,
  } = useMutation({
    mutationKey: ["auth"],
    mutationFn: signInWithEmailPassword,
    onSuccess: (data) => {
      dispatch(loginSuccess(data));
      notify("success", data.message);
    },
    onError: (error: unknown) => {
      const errorMsg = error as { error: { code: string; message: string } };
      dispatch(loginFailure(errorMsg));
      notify("error", errorMsg.error.message);
    },
  });

  return {
    signInPending,
    signInWithEmailPasswordMutation,
  };
};
