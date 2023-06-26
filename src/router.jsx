import { createBrowserRouter } from "react-router-dom"

import { DefaultLayout } from "./layout/DefaultLayout"
import { ErrorScreen } from "./screens/ErrorScreen"
import { HomeScreen } from "./screens/HomeScreen"
import { SigninScreen } from "./screens/SigninScreen"
import { SignupScreen } from "./screens/SignupScreen"
import { Private } from "./components/Private"

export const useRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      errorElement: <ErrorScreen />,
      children: [
        {
          path: "",
          element: <Private />,
          children: [
            {
              index: true,
              element: <HomeScreen />
            }
          ]
        },
        {
          path: "signin",
          element: <SigninScreen />
        },
        {
          path: "signup",
          element: <SignupScreen />
        }
      ]
    }
  ])

  return { router }
}
