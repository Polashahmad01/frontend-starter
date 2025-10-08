import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, BaseErrorResponse, BaseResponseData } from "../../types";

const initialState: AuthState = {
  user: null,
  accessToken: null,
  isAuthenticated: false,
  message: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<BaseResponseData>) => {
      state.user = action.payload.data.user;
      state.accessToken = action.payload.data.accessToken;
      state.message = action.payload.message;
    },
    loginFailure: (state, action: PayloadAction<BaseErrorResponse>) => {
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      state.message = action.payload.error.message;
      state.error = action.payload.error;
    },
    loginAuthenticate: (state, action: PayloadAction<BaseResponseData>) => {
      state.user = action.payload.data.user;
      state.accessToken = action.payload.data.accessToken;
      state.message = action.payload.message;
      state.isAuthenticated = true;
    },
    logoutSuccess: (state) => {
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      state.message = null;
    },
    logoutFailure: (state, action: PayloadAction<BaseErrorResponse>) => {
      state.message = action.payload.error.message;
      state.error = action.payload.error;
    }
  }
});

export const {
  loginSuccess,
  loginFailure,
  loginAuthenticate,
  logoutSuccess,
  logoutFailure
} = authSlice.actions;

export default authSlice.reducer;
