import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, BaseErrorResponse, BaseResponseData, User } from "../../types";

const initialState: AuthState = {
  user: null,
  accessToken: null,
  isAuthenticated: false,
  message: null,
  tokenExpiry: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<BaseResponseData>) => {
      state.user = action.payload.data.user;
      state.accessToken = action.payload.data.accessToken;
      state.message = action.payload.message;
      state.tokenExpiry = Date.now() + (7 * 24 * 60 * 60 * 1000);
    },
    loginFailure: (state, action: PayloadAction<BaseErrorResponse>) => {
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      state.message = action.payload.error.message;
      state.error = action.payload.error;
      state.tokenExpiry = null;
    },
    loginAuthenticate: (state, action: PayloadAction<BaseResponseData>) => {
      state.user = action.payload.data.user;
      state.accessToken = action.payload.data.accessToken;
      state.message = action.payload.message;
      state.isAuthenticated = true;
      if (!state.tokenExpiry) {
        state.tokenExpiry = Date.now() + (7 * 24 * 60 * 60 * 1000);
      }
    },
    logoutSuccess: (state) => {
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      state.message = null;
      state.tokenExpiry = null;
    },
    logoutFailure: (state, action: PayloadAction<BaseErrorResponse>) => {
      state.message = action.payload.error.message;
      state.error = action.payload.error;
      state.tokenExpiry = null;
    },
    checkTokenExpiry: (state) => {
      // Check if token has expired
      if (state.tokenExpiry && Date.now() > state.tokenExpiry) {
        state.user = null;
        state.accessToken = null;
        state.isAuthenticated = false;
        state.tokenExpiry = null;
        state.message = "Session expired. Please sign in again.";
      }
    },
    restoreAuthState: (state, action: PayloadAction<{ user: User; accessToken: string; tokenExpiry: number }>) => {
      // Restore authentication state from persisted storage
      const { user, accessToken, tokenExpiry } = action.payload;

      // Check if token is still valid
      if (tokenExpiry && Date.now() < tokenExpiry) {
        state.user = user;
        state.accessToken = accessToken;
        state.isAuthenticated = true;
        state.tokenExpiry = tokenExpiry;
      } else {
        // Token expired, clear state
        state.user = null;
        state.accessToken = null;
        state.isAuthenticated = false;
        state.tokenExpiry = null;
      }
    }
  }
});

export const {
  loginSuccess,
  loginFailure,
  loginAuthenticate,
  logoutSuccess,
  logoutFailure,
  checkTokenExpiry,
  restoreAuthState
} = authSlice.actions;

export default authSlice.reducer;
