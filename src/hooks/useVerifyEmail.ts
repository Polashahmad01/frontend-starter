import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { notify } from "../utils/notify";
import { verifyEmail } from "../services";
import { useAppDispatch } from "../store/hooks/useStore";
import {
  loginSuccess,
  loginFailure,
  loginAuthenticate
} from "../store/slices/authSlice";
import { BaseErrorResponse } from "../types";

export const useVerifyEmail = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { mutateAsync: verifyEmailMutation, isPending: isVerifyEmailPending } = useMutation({
    mutationKey: ["auth"],
    mutationFn: verifyEmail,
    onSuccess: (data) => {
      dispatch(loginSuccess(data));
      dispatch(loginAuthenticate(data));
      notify("success", data.message);
      navigate("/app");
    },
    onError: (error: unknown) => {
      const errorData = error as BaseErrorResponse;
      dispatch(loginFailure(errorData));
      notify("error", errorData.error.message);
    }
  });

  return {
    isVerifyEmailPending,
    verifyEmailMutation,
  }
}
