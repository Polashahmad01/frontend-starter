import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import { lazy } from "react";
import Layout from "../layouts/Layout";
import AuthLayout from "../layouts/AuthLayout";
import LazyWrapper from "../components/LazyWrapper";
import legalRoutes from "./LegalRoutes";
import authRoutes from "./AuthRoutes";
import appRoutes from "./AppRoutes";
import { notFoundPagePropsData } from "../lib/AppData";

// Lazy load components for better performance
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

// Create router with improved structure
const router = createBrowserRouter([
  // Root redirect
  {
    path: "/",
    element: <Navigate to="/sign-in" replace />,
  },

  // Protected app routes
  {
    path: "/app",
    element: <Layout />,
    children: appRoutes.map((route) => ({
      path: route.path,
      index: route.index,
      element: route.element,
      handle: {
        title: route.title,
        description: route.description,
        requiresAuth: route.requiresAuth,
      },
    })),
  },

  // Auth routes with shared layout
  {
    path: "/",
    element: <AuthLayout />,
    children: [...authRoutes, ...legalRoutes].map((route) => ({
      path: route.path,
      element: route.element,
      handle: {
        title: route.title,
        description: route.description,
      },
    })),
  },

  // 404 fallback
  {
    path: "*",
    element: (
      <LazyWrapper>
        <NotFoundPage {...notFoundPagePropsData} />
      </LazyWrapper>
    ),
    handle: {
      title: "Page Not Found",
      description: "The requested page could not be found",
    },
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
