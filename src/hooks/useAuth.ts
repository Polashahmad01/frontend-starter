import { useMutation } from "@tanstack/react-query";
import { signInWithEmailPassword } from "../services/authService";
import { useAppDispatch } from "../store/hooks/useStore";
import { loginSuccess, loginFailure } from "../store/slices/authSlice";

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["auth"],
    mutationFn: signInWithEmailPassword,
    onSuccess: (data) => {
      dispatch(loginSuccess(data));
    },
    onError: (error: unknown) => {
      dispatch(
        loginFailure(error as { error: { code: string; message: string } })
      );
    },
  });
  return { mutateAsync, isPending };
};
