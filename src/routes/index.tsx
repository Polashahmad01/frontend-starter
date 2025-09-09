
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../layouts/Layout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "login",
        element: <LoginPage />
      }
    ]
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
]);

export default function AppRouter() {
  return <RouterProvider router={router} />
}
