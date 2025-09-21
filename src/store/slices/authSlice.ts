import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, SignInResponse } from "../../types/auth";

const initialState: AuthState = {
  user: null,
  accessToken: null,
  isAuthenticated: false,
  error: {
    code: null,
    message: null,
  },
  message: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<SignInResponse>) => {
      state.user = action.payload.data.user;
      state.accessToken = action.payload.data.accessToken;
      state.isAuthenticated = true;
      state.message = action.payload.message;
      state.error = { code: null, message: null };
    },
    loginFailure: (
      state,
      action: PayloadAction<{ error: { code: string; message: string } }>
    ) => {
      state.error = {
        code: action.payload.error.code,
        message: action.payload.error.message,
      };
      state.isAuthenticated = false;
      state.user = null;
      state.accessToken = null;
      state.message = action.payload.error.message;
    },
    logout: () => initialState,
  },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
