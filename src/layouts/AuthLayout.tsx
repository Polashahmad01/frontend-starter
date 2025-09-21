import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";

export default function AuthLayout() {
  return (
    <main>
      <Outlet />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            backgroundColor: "#f3f3f3",
            borderRadius: "8px",
            border: "1px solid #d4d4d499",
            padding: "12px 16px",
            color: "#404040",
            fontSize: "14px",
            fontWeight: 500,
          },
        }}
      />
    </main>
  );
}
