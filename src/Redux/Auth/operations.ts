import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://learn-apex-backend.onrender.com";

// https://apex-backend-dev.onrender.com/oauth2 for dev server


// const axiosInstance = axios.create({
//   baseURL: "https://resilient-koala-kavko5-dev-ed.trailblaze.my.salesforce.com/services/oauth2",
//   headers: {
//     common:{
//       Accept: "*"
//     }
//   }
// });

type refreshReturn = {
  accessToken: string;
};

export const refreshSF_Token = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state: any = thunkAPI.getState();
    const refreshToken = state.auth.refreshToken;
    const accessToken = state.auth.accessToken;
    const instanceUrl = state.auth.instanceURL;
    try {
      const resp = await axios.get(
        `/refresh?refreshToken=${refreshToken}&accessToken=${accessToken}&instanceUrl=${instanceUrl}`
      );
      console.log(resp.data);
      return resp.data as refreshReturn
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const logout = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    const state: any = thunkAPI.getState();
    const refreshToken = state.auth.refreshToken;
    const accessToken = state.auth.accessToken;
    const instanceUrl = state.auth.instanceUrl;
    try {
      const resp = await axios.get(
        `/logout?accessToken=${accessToken}&instanceUrl=${instanceUrl}&refreshToken=${refreshToken}`
      );
      console.log(resp.data);
    } catch (error: any) {
      console.log(thunkAPI.rejectWithValue(error.message));
    }
  }
);
