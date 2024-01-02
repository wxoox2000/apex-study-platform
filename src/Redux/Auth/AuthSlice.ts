import { createSlice } from "@reduxjs/toolkit";

export type authInitState = {
  accessToken: null | string;
  refreshToken: null | string;
  instance: null | string;
  userID: null | string;
  orgID: null | string;
  sfLogging: boolean;
  isLoggedIn: boolean;
};
const initialState: authInitState = {
  accessToken: null,
  refreshToken: null,
  instance: null,
  userID: null,
  orgID: null,
  sfLogging: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData(
      state,
      action: { payload: Omit<authInitState, "isLoggedIn"| "sfLogging">; type: string }
    ) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.instance = action.payload.instance;
      state.orgID = action.payload.orgID;
      state.userID = action.payload.userID;
      state.isLoggedIn = true;
      state.sfLogging = false;
    },
    resetUserData(state) {
      state.accessToken = null;
      state.refreshToken = null;
      state.instance = null;
      state.userID = null;
      state.orgID = null;
      state.isLoggedIn = false;
    },
    setLoggingToSf(state) {
      state.sfLogging = true;
    }
  },
});

export const authReducer = authSlice.reducer;
export const {setUserData, resetUserData, setLoggingToSf} = authSlice.actions;
