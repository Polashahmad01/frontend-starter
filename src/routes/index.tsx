import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import Layout from "../layouts/Layout";
import AuthLayout from "../layouts/AuthLayout";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import NotFoundPage from "../pages/NotFoundPage";
import TermsOfUsePage from "../pages/TermsOfUsePage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import { notFoundPagePropsData } from "../lib/AppData";

const router = createBrowserRouter([
  {
    path: "/app",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/join",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/forgot-password",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <ForgotPasswordPage />,
      },
    ],
  },
  {
    path: "/reset-password",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <ResetPasswordPage />,
      },
    ],
  },
  {
    path: "/terms-of-use",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <TermsOfUsePage />,
      },
    ],
  },
  {
    path: "/privacy-policy",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <PrivacyPolicyPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage {...notFoundPagePropsData} />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
