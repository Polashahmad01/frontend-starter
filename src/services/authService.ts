import { SignInSchema } from "../schema";

export const signInWithEmailPassword = async (
  userData: SignInSchema
): Promise<Response> => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/api/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }
  );

  const data = await response.json();
  if (!response.ok) {
    throw data;
  }

  return data;
};
