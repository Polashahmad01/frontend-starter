import { useState } from "react";
import { CredentialResponse } from "@react-oauth/google";
import { useAppDispatch } from "../store/hooks/useStore";
import { loginSuccess, loginFailure } from "../store/slices/authSlice";
import { notify } from "../utils/notify";

export const useSignInWithGoogle = () => {
  const dispatch = useAppDispatch();
  const [isSignInWithGoogleLoading, setIsSignInWithGoogleLoading] = useState<boolean>(false);

  const signInWithPopUp = async (credentialResponse: CredentialResponse) => {
    try {
      setIsSignInWithGoogleLoading(true);
      const response = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/auth/google`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          idToken: credentialResponse.credential
        }),
        credentials: "include"
      });

      const data = await response.json();
      if (!response.ok) {
        throw data;
      }
      dispatch(loginSuccess(data));
      notify("success", data.message);
      setIsSignInWithGoogleLoading(false);
    } catch (error: unknown) {
      const errorPayload = (error && typeof error === 'object' && 'error' in error && error.error)
        ? error.error as { code: string; message: string }
        : { code: "UNKNOWN_ERROR", message: "An unexpected error occurred" };
      dispatch(loginFailure(errorPayload));
      notify("error", errorPayload.message);
      setIsSignInWithGoogleLoading(false);
    }
  }

  return {
    isSignInWithGoogleLoading,
    signInWithPopUp
  }
};
