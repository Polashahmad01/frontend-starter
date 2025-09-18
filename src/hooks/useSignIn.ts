import { useQueryClient, useMutation } from "@tanstack/react-query";

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "user" | "admin";
  isEmailVerified: boolean;
}

interface SignInWithEmailAndPasswordResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    accessToken: string;
    refreshToken: string;
  };
}

interface SignInUser {
  email: string;
  password: string;
}

const signInUser = async (
  userData: SignInUser
): Promise<SignInWithEmailAndPasswordResponse> => {
  const response = await fetch("http://localhost:8000/api/auth/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Failed to sign in");
  }

  console.log("response", await response.json());

  return response.json();
};

export const authKeys = {
  signIn: () => ["auth", "signIn"] as const,
};

export const useCreateUserWithEmailAndPassword = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: signInUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: authKeys.signIn(),
      });
    },
  });
};
