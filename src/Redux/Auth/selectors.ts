import { authInitState } from "./AuthSlice";

type RootState = {
  auth: authInitState;
};

export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectInstance = (state: RootState) => state.auth.instance;
export const selectUserID = (state: RootState) => state.auth.userID;
export const selectOrgID = (state: RootState) => state.auth.orgID;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectSF_Logging = (state: RootState) => state.auth.sfLogging;
