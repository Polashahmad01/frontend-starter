import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";
import { useAppSelector } from "../store/hooks/useStore";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, accessToken } = useAppSelector((state) => state.auth);
  const location = useLocation();

  // Check if user is authenticated and has a valid token
  if (!isAuthenticated || !accessToken) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />
  }

  return (
    <>
      {children}
    </>
  )
}
