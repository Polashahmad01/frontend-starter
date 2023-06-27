import { Outlet } from "react-router-dom"

import { AppNavbar } from "../components/AppNavbar"
import { AppFooter } from "../components/AppFooter"

export const DefaultLayout = () => {

  return (
    <div className="flex flex-col justify-between h-screen">
      <AppNavbar />
      <main className="container mx-auto px-4">
        <Outlet />
      </main>
      <div className="container mx-auto px-4">
        <AppFooter />
      </div>
    </div>
  )
}
