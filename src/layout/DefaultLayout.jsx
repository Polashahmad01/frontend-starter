import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

import { AppNavbar } from "../components/AppNavbar"
import { AppFooter } from "../components/AppFooter"

export const DefaultLayout = () => {

  return (
    <div className="flex flex-col justify-between h-screen">
      <AppNavbar />
      <main className="container mx-auto px-4">
        <Outlet />
        <ToastContainer
          position="bottom-right"
          autoClose={1500}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          toastStyle={{ background: "#242424", color: "rgba(255, 255, 255, 0.87)" }}
        />
      </main>
      <div className="container mx-auto px-4">
        <AppFooter />
      </div>
    </div>
  )
}
