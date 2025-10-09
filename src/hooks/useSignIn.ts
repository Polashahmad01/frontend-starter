import { useNavigate, useLocation } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { notify } from "../utils/notify";
import { useAppDispatch } from "../store/hooks/useStore";
import {
  loginSuccess,
  loginFailure,
  loginAuthenticate
} from "../store/slices/authSlice";
import { signInWithEmailPassword } from "../services/authService";
import { BaseErrorResponse } from "../types";

export const useSignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const {
    mutateAsync: signInWithEmailPasswordMutation,
    isPending: isSignInPending
  } = useMutation({
    mutationKey: ["auth"],
    mutationFn: signInWithEmailPassword,
    onSuccess: (data) => {
      dispatch(loginSuccess(data));
      dispatch(loginAuthenticate(data));
      notify("success", data.message);
      
      // Redirect to the intended route or default to /app
      const from = location.state?.from?.pathname || "/app";
      navigate(from, { replace: true });
    },
    onError: (error: unknown) => {
      const errorData = error as BaseErrorResponse;
      dispatch(loginFailure(errorData));
      notify("error", errorData.error.message);
    }
  });

  return {
    isSignInPending,
    signInWithEmailPasswordMutation
  }
}
