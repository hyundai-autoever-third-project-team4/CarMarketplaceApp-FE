import axios, { AxiosInstance } from "axios";
import { getCookie, getRefresh } from "./cookie";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const authInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getCookie()}`,
    RefreshToken: `Bearer ${getRefresh()}`,
  },
});

export const noAuthInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});
