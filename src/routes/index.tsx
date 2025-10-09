import { lazy } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import Layout from "../layouts/Layout";
import AuthLayout from "../layouts/AuthLayout";
import LazyWrapper from "../components/LazyWrapper";
import ProtectedRoute from "../components/ProtectedRoute";
import appRoutes from "./AppRoutes";
import authRoutes from "./AuthRoutes";
import legalRoutes from "./LegalRoutes";

// Lazy load components for better performance
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

// Create router with improved structure
const router = createBrowserRouter([
  // Root redirect - smart redirect based on auth state
  {
    path: "/",
    element: <Navigate to="/app" replace />,
    errorElement: <ErrorPage />
  },
  // Protected app routes
  {
    path: "/app",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: appRoutes.map((route) => ({
      path: route.path,
      element: route.element,
      handle: {
        title: route.title,
        description: route.description,
        requiresAuth: route.requiresAuth,
      },
    })),
    errorElement: <ErrorPage />
  },

  // Auth routes
  {
    path: "/",
    element: <AuthLayout />,
    children: authRoutes.map((route) => ({
      path: route.path,
      element: route.element,
      handle: {
        title: route.title,
        description: route.description,
      },
    })),
    errorElement: <ErrorPage />
  },

  // Legal routes
  {
    path: "/",
    element: <AuthLayout />,
    children: legalRoutes.map((route) => ({
      path: route.path,
      element: route.element,
      handle: {
        title: route.title,
        description: route.description,
      },
    })),
    errorElement: <ErrorPage />
  },
  // 404 fallback
  {
    path: "*",
    element: (
      <LazyWrapper>
        <NotFoundPage />
      </LazyWrapper>
    ),
    handle: {
      title: "Page Not Found",
      description: "The requested page could not be found",
    },
    errorElement: <ErrorPage />,
  }
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
