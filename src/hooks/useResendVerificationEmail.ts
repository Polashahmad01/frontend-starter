import { useMutation } from "@tanstack/react-query";
import {
  useAppDispatch,
  useAppSelector
} from "../store/hooks/useStore";
import {
  loginFailure,
  loginSuccess
} from "../store/slices/authSlice";
import { notify } from "../utils/notify";
import { resendVerificationEmail } from "../services/authService";
import { BaseErrorResponse } from "../types";

export const useResendVerificationEmail = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const {
    mutateAsync: resendVerificationEmailMutation,
    isPending: isResendVerificationEmailPending
  } = useMutation({
    mutationKey: ["auth"],
    mutationFn: () => resendVerificationEmail(user?.email),
    onSuccess: (data) => {
      dispatch(loginSuccess(data));
      notify("success", data.message);
    },
    onError: (error: unknown) => {
      const errorData = error as BaseErrorResponse;
      dispatch(loginFailure(errorData));
      notify("error", errorData.error.message);
    }
  });

  return {
    isResendVerificationEmailPending,
    resendVerificationEmailMutation,
  }
}
