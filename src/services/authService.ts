import { SignUpSchema } from "../schemas"

export const signUpWithEmailPassword = async (formData: SignUpSchema) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_BACKEND_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData),
    credentials: "include"
  });

  const data = await response.json();
  if (!response.ok) {
    throw data;
  }

  return data;
}

export const verifyEmail = async (token: string) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_BACKEND_URL}/api/auth/verify-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token,
    }),
    credentials: "include",
  });

  const data = await response.json();
  if (!response.ok) {
    throw data;
  }

  return data;
}

export const resendVerificationEmail = async (email: string | undefined) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_BACKEND_URL}/api/auth/resend-verification-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
    }),
    credentials: "include",
  });

  const data = await response.json();
  if (!response.ok) {
    throw data;
  }

  return data;
}
