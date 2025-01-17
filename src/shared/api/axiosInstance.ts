import axios, { AxiosInstance } from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const authInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("access_token")}`, // access token 추가
  },
});

export const noAuthInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});
