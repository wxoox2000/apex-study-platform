import { createSlice } from "@reduxjs/toolkit";

export type authInitState = {
  accessToken: null | string;
  instance: null | string;
  userID: null | string;
  orgID: null | string;
  isLoggedIn: boolean;
};
const initialState: authInitState = {
  accessToken: null,
  instance: null,
  userID: null,
  orgID: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData(
      state,
      action: { payload: Omit<authInitState, "isLoggedIn">; type: string }
    ) {
      state.accessToken = action.payload.accessToken;
      state.instance = action.payload.instance;
      state.orgID = action.payload.orgID;
      state.userID = action.payload.userID;
      state.isLoggedIn = true;
    },
  },
});

export const authReducer = authSlice.reducer;
export const {setUserData} = authSlice.actions;
