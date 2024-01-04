import { createSlice } from "@reduxjs/toolkit";
import { logout, refreshSF_Token } from "./operations";

export type authInitState = {
  accessToken: null | string;
  refreshToken: null | string;
  instanceUrl: null | string;
  userID: null | string;
  orgID: null | string;
  sfLogging: boolean;
  isLoggedIn: boolean;
  isRefreshing: boolean;
};
const initialState: authInitState = {
  accessToken: null,
  refreshToken: null,
  instanceUrl: null,
  userID: null,
  orgID: null,
  sfLogging: false,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData(
      state,
      action: {
        payload: Omit<
          authInitState,
          "isLoggedIn" | "sfLogging" | "isRefreshing"
        >;
        type: string;
      }
    ) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.instanceUrl = action.payload.instanceUrl;
      state.orgID = action.payload.orgID;
      state.userID = action.payload.userID;
      state.isLoggedIn = true;
      state.sfLogging = false;
    },
    resetUserData(state) {
      state.accessToken = null;
      state.refreshToken = null;
      state.instanceUrl = null;
      state.userID = null;
      state.orgID = null;
      state.isLoggedIn = false;
    },
    setLoggingToSf(state) {
      state.sfLogging = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(refreshSF_Token.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(
        refreshSF_Token.fulfilled,
        (
          state,
          action: {
            payload: Pick<authInitState, "accessToken">;
          }
        ) => {
          state.isRefreshing = false;
          state.accessToken = action.payload.accessToken;
        }
      )
      .addCase(refreshSF_Token.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.accessToken = null;
        state.refreshToken = null;
        state.instanceUrl = null;
        state.userID = null;
        state.orgID = null;
        state.isLoggedIn = false;
  
      });
  },
});

export const authReducer = authSlice.reducer;
export const { setUserData, resetUserData, setLoggingToSf } =
  authSlice.actions;
