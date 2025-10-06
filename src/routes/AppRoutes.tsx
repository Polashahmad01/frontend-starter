import { lazy } from "react";
import LazyWrapper from "../components/LazyWrapper";
import { RouteConfig } from "../types";

// Lazy load components for better performance
const AppPage = lazy(() => import("../pages/AppPage"));

// App routes configuration
const appRoutes: RouteConfig[] = [
  {
    path: "",
    index: true,
    element: (
      <LazyWrapper>
        <AppPage />
      </LazyWrapper>
    ),
    title: "App",
    description: "Application dashboard",
    requiresAuth: true,
  }
];

export default appRoutes;
