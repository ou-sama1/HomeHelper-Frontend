import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";
const prefix = "";

const api = axios.create({
  baseURL: `${baseUrl}${prefix ? "/" + prefix : ""}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    "ACCESS_TOKEN",
  )}`;

  return config;
});

export default api;
