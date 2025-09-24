import { ForgotPasswordSchema, SignInSchema, SignUpSchema } from "../schema";
import { SignInResponse, SignUpResponse } from "../types";

export const signInWithEmailPassword = async (
  userData: SignInSchema
): Promise<SignInResponse> => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/api/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      credentials: "include",
    }
  );

  const data = await response.json();
  if (!response.ok) {
    throw data;
  }

  return data;
};

export const signUpWithEmailPassword = async (
  formData: SignUpSchema
): Promise<SignUpResponse> => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/api/auth/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
    }
  );

  const data = await response.json();
  console.log("response data", data);
  if (!response.ok) {
    throw data;
  }

  return data;
};

export const forgotPasswordWithEmail = async (
  formData: ForgotPasswordSchema
) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/api/auth/forgot-password`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
      }),
      credentials: "include",
    }
  );

  const data = await response.json();
  if (!response.ok) {
    throw data;
  }

  return data;
};
