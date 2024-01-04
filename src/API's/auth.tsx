import axios from "axios";
axios.defaults.baseURL = "https://learn-apex-backend.onrender.com"

// https://apex-backend-dev.onrender.com/oauth2 for dev server

// axios.defaults.headers.common.Accept = "*";
// export const login = async () => {
//   const resp = await axios.get("/");
//   console.log(resp.data);
//   return resp.data;
// };

export const logout = async (instance: string, token: string, refreshToken: string) => {
  const resp = await axios.get(
    `/logout?accessToken=${token}&instanceUrl=${instance}&refreshToken=${refreshToken}`);
    console.log(resp);
  return resp;
};
// В постмане сдеать запрос по рефреш токену, как текущий ацесс будет недоступен, сравнить их