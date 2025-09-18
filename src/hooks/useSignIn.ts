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
  try {
    const response = await fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `Sign in failed: ${response.status}`);
    }

    console.log("Sign in successful:", data);
    return data;
  } catch (error) {
    console.error("Sign in error:", error);
    throw error instanceof Error ? error : new Error("An unexpected error occurred during sign in");
  }
};

export const authKeys = {
  signIn: () => ["auth", "signIn"] as const,
};

export const useSignInWithEmailAndPassword = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: signInUser,
    onSuccess: (data) => {
      console.log("Sign in mutation successful:", data);
      queryClient.invalidateQueries({
        queryKey: authKeys.signIn(),
      });
    },
    onError: (error) => {
      console.error("Sign in mutation failed:", error);
    },
  });
};
