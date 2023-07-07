import axios, { AxiosInstance } from "axios";
import cors from "cors";

const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: "https://api.example.com", // Ganti dengan URL API yang sesuai
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use((config) => {
    config.headers["Access-Control-Allow-Origin"] = "*";
    return config;
  });

  instance.use(cors());

  return instance;
};

export const api = createAxiosInstance();
