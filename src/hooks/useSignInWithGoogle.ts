import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { notify } from "../utils/notify";
import { signInWithGoogle } from "../utils/firebase";
import { signInWithGoogleAction } from "../services";
import { useAppDispatch } from "../store/hooks/useStore";
import { loginSuccess, loginFailure, loginAuthenticate } from "../store/slices/authSlice";
import { BaseResponseData, BaseErrorResponse } from "../types/appTypes";

export const useSignInWithGoogle = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [isSignInWithGoogleLoading, setIsSignInWithGoogleLoading] = useState(false);

  const signInWithGooglePopup = async () => {
    try {
      setIsSignInWithGoogleLoading(true);
      const result = await signInWithGoogle();
      const idToken = await result.user.getIdToken();
      const data: BaseResponseData = await signInWithGoogleAction(idToken);
      setIsSignInWithGoogleLoading(false);
      dispatch(loginSuccess(data));
      dispatch(loginAuthenticate(data));
      notify("success", data.message);

      // Redirect to the intended route or default to /app
      const from = location.state?.from?.pathname || "/app";
      navigate(from, { replace: true });
    } catch (error: unknown) {
      setIsSignInWithGoogleLoading(false);
      if (error && typeof error === 'object' && 'error' in error) {
        const errorData = error as BaseErrorResponse;
        notify("error", errorData.error.message);
        dispatch(loginFailure(errorData));
      } else if (error && typeof error === 'object' && 'message' in error) {
        notify("error", (error as { message: string }).message);
      } else {
        notify("error", "An unexpected error occurred. Please try again.");
      }
    }
  }

  return {
    isSignInWithGoogleLoading,
    signInWithGooglePopup
  }
}
