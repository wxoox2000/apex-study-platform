import axios from "axios";
axios.defaults.baseURL = "https://learn-apex-backend.onrender.com/oauth2"

export const login = async () => {
const resp = await axios.get("/");
console.log(resp.data);
return resp.data
}