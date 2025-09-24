export interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  error: {
    code: string | null;
    message: string | null;
  };
  message: string | null;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  isEmailVerified: boolean;
}

export interface SignInResponse {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    user: User;
  };
  error: Error;
}

export interface SignUpResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    accessToken: string;
  };
  error: Error;
}
