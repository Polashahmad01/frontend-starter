import { lazy } from "react";
import { RouteConfig } from "../types";
import LazyWrapper from "../components/LazyWrapper";

// Lazy load components for better performance
const JoinPage = lazy(() => import("../pages/JoinPage"));
const SignInPage = lazy(() => import("../pages/SignInPage"));
const SignUpPage = lazy(() => import("../pages/SignUpPage"));
const ForgotPasswordPage = lazy(() => import("../pages/ForgotPasswordPage"));
const ResetPasswordPage = lazy(() => import("../pages/ResetPasswordPage"));
const VerifyEmailPage = lazy(() => import("../pages/VerifyEmailPage"));

const authRoutes: RouteConfig[] = [
  {
    path: "/join",
    element: (
      <LazyWrapper>
        <JoinPage />
      </LazyWrapper>
    ),
    title: "Join",
    description: "Join our platform"
  },
  {
    path: "/sign-in",
    element: (
      <LazyWrapper>
        <SignInPage />
      </LazyWrapper>
    ),
    title: "Sign In",
    description: "Sign in to your account",
  },
  {
    path: "/sign-up",
    element: (
      <LazyWrapper>
        <SignUpPage />
      </LazyWrapper>
    ),
    title: "Sign Up",
    description: "Create a new account"
  },
  {
    path: "/forgot-password",
    element: (
      <LazyWrapper>
        <ForgotPasswordPage />
      </LazyWrapper>
    ),
    title: "Forgot Password",
    description: "Reset your password",
  },
  {
    path: "/reset-password",
    element: (
      <LazyWrapper>
        <ResetPasswordPage />
      </LazyWrapper>
    ),
    title: "Reset Password",
    description: "Set a new password",
  },
  {
    path: "/verify-email",
    element: (
      <LazyWrapper>
        <VerifyEmailPage />
      </LazyWrapper>
    ),
    title: "Verify Email",
    description: "Verify your email",
  },
];

export default authRoutes;
