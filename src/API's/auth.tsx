import axios from "axios";
axios.defaults.baseURL = "https://learn-apex-backend.onrender.com/oauth2"
axios.defaults.headers.common.Accept = "*";
export const login = async () => {
  const resp = await axios.get("/");
  console.log(resp.data);
  return resp.data;
};

export const logout = async (instance: string, token: string) => {
  const resp = await axios.post(
    `/logout`, {accessToken: token, instanceUrl: instance});
    console.log(resp);
  return resp;
};
