import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import App from "./App.tsx";
import TanstackQueryClientProvider from "./providers/TanstackQueryClientProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TanstackQueryClientProvider>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </TanstackQueryClientProvider>
  </StrictMode>,
)
