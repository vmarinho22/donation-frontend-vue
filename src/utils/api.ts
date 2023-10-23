import axios from "axios";
import env from "./env";

const api = axios.create({
  baseURL : env.api.url,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token") || ""}`,
    "Content-Type": "application/json",
  }, 
  timeout: 8000
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token") || "";
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;