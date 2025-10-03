import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import App from "./App.tsx";
import ReduxProvider from "./providers/ReduxProvider.tsx";
import TanstackQueryClientProvider from "./providers/TanstackQueryClientProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={`${import.meta.env.VITE_GOOGLE_CLIENT_ID}`}>
      <ReduxProvider>
        <TanstackQueryClientProvider>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </TanstackQueryClientProvider>
      </ReduxProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);
