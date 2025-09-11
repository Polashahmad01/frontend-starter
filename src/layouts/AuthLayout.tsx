import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <main className="container mx-auto px-6 py-6 h-screen">
      <Outlet />
    </main>
  );
}
