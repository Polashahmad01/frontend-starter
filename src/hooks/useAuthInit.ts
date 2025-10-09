import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks/useStore";
import { checkTokenExpiry } from "../store/slices/authSlice";

export const useAuthInit = () => {
  const dispatch = useAppDispatch();
  const { tokenExpiry, isAuthenticated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    // Check token expiry on app initialization
    if (isAuthenticated && tokenExpiry) {
      dispatch(checkTokenExpiry());
    }

    // Only set up interval if user is authenticated
    if (!isAuthenticated || !tokenExpiry) {
      return;
    }

    // Set up interval to check token expiry every minute
    const interval = setInterval(() => {
      dispatch(checkTokenExpiry());
    }, 6000000);

    return () => {
      clearInterval(interval);
    }
  }, [dispatch, isAuthenticated, tokenExpiry]);
}
