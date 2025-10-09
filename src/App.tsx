import AppRouter from "./routes";
import { useAuthInit } from "./hooks/useAuthInit";

export default function App() {
  useAuthInit();

  return <AppRouter />;
}
