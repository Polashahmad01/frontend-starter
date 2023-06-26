import { Outlet } from "react-router-dom"

import { AppNavbar } from "../components/AppNavbar"

export const DefaultLayout = () => {

  return (
    <div className="flex flex-col justify-between h-screen">
      <AppNavbar />
      <main className="container mx-auto px-4">
        <Outlet />
      </main>
      <h1>Footer</h1>
    </div>
  )
}
