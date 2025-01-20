import axios, { AxiosInstance } from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const getToken = () => {
  console.log("겟토큰 메서드 호출:", localStorage.getItem("access_token"));
  return localStorage.getItem("access_token");
};

export const authInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`, // access token 추가
  },
});

export const noAuthInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});
