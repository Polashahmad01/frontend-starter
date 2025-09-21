import { useMutation } from "@tanstack/react-query";
import { signInWithEmailPassword } from "../services/authService";

export const useAuth = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["auth"],
    mutationFn: signInWithEmailPassword,
    onSuccess: (data) => {
      console.log("success", data);
    },
    onError: (error) => {
      console.log("error", error);
    },
  });
  return { mutateAsync, isPending };
};
