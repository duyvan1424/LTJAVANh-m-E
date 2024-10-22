import axios from "axios";
import queryString from "query-string";

export const API_URL = "your api url";

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Cache-Control": "no-cache",
    "Content-Type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Origin": "*",
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  const token = "put token here";
  config.headers.Authorization = token ? `Bearer ${token}` : "";

  return config;
});

export default axiosClient;
