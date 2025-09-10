
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../layouts/Layout";
import AuthLayout from "../layouts/AuthLayout";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import NotFoundPage from "../pages/NotFoundPage";
import { notFoundPagePropsData } from "../lib/AppData";

const router = createBrowserRouter([
  {
    path: "/app",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "join",
        element: <RegisterPage />
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordPage />
      },
      {
        path: "reset-password",
        element: <ResetPasswordPage />
      }
    ]
  },
  {
    path: "*",
    element: <NotFoundPage {...notFoundPagePropsData} />
  }
]);

export default function AppRouter() {
  return <RouterProvider router={router} />
}
