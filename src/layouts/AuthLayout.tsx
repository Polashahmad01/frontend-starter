import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto">
        <Outlet />
      </div>
    </main>
  )
}
