import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../services/authService";
import { notify } from "../utils/notify";
import { useAppDispatch } from "../store/hooks/useStore";
import { BaseErrorResponse } from "../types";
import { logoutSuccess, logoutFailure } from "../store/slices/authSlice";

export const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    mutateAsync: logoutMutation,
    isPending: isLogoutPending
  } = useMutation({
    mutationKey: ["auth"],
    mutationFn: logout,
    onSuccess: (data) => {
      dispatch(logoutSuccess(data));
      notify("success", data.message);
      navigate("/sign-in");
    },
    onError: (error: unknown) => {
      const errorData = error as BaseErrorResponse;
      dispatch(logoutFailure(errorData));
      notify("error", errorData.error.message);
    }
  });

  return {
    isLogoutPending,
    logoutMutation
  }
}
