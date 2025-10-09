// App types
export interface AppConfig {
  baseBackendUrl: string;
  firebase: FirebaseConfig;
}

// Firebase config
export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

// User
export interface User {
  id: string;
  email: string;
  fullName: string;
  role: string;
  isEmailVerified: boolean;
  firebaseUid?: string;
  profilePicture?: string;
  authProvider?: string;
}

// Data
export interface Data {
  user: User;
  accessToken: string;
}

// Base response data
export interface BaseResponseData {
  success: boolean;
  message: string;
  data: Data;
}

// Base response error
export interface BaseErrorResponse {
  success: boolean;
  error: {
    code: string;
    message: string;
  }
}

// Auth state
export interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  error?: {
    code: string;
    message: string;
  };
  message: string | null;
  tokenExpiry: number | null;
}