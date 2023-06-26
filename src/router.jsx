import { createBrowserRouter } from "react-router-dom"

import { HomeScreen } from "./screens/HomeScreen"
import { SigninScreen } from "./screens/SigninScreen"

export const useRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen />
    },
    {
      path: "/signin",
      element: <SigninScreen />
    }
  ])

  return { router }
}
