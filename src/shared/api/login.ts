import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { noAuthInstance } from "./axiosInstance";
import { ResponseBody } from "@/shared/api/type";

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  email: string;
  userId: string;
}

export const useLoginHandler = () => {
  const navigate = useNavigate();

  const handleLogin = useCallback(async () => {
    try {
      const response: ResponseBody<LoginResponse> = await noAuthInstance.get(
        "/login"
      );

      if (response.status === 200 && response.data) {
        // localStorage에 토큰과 사용자 정보 저장
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        localStorage.setItem("userEmail", response.data.email);
        localStorage.setItem("userId", response.data.userId);

        // 홈페이지로 리다이렉트
        navigate("/");
        return true;
      }
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  }, [navigate]);

  return { handleLogin };
};
