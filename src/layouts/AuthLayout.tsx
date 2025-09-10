import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <main>
      <p>Auth Module</p>
      <div>
        <Outlet />
      </div>
    </main>
  )
}
