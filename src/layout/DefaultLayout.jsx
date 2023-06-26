import { Outlet } from "react-router-dom"

export const DefaultLayout = () => {

  return (
    <div className="flex flex-col justify-between h-screen">
      <h1>Navbar</h1>
      <main>
        <Outlet />
      </main>
      <h1>Footer</h1>
    </div>
  )
}
