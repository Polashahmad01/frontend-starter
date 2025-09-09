
import { createBrowserRouter, RouterProvider } from "react-router"

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Layout</h1>,
    children: [
      {
        index: true,
        element: <h1>Home Page</h1>
      },
      {
        path: "login",
        element: <h1>Login Page</h1>
      }
    ]
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>
  }
]);

export default function AppRouter() {
  return <RouterProvider router={router} />
}
