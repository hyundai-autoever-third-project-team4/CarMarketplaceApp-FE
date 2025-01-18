import { authInstance } from "@/shared/api/axiosInstance"; // Axios 인스턴스 가져오기
import { ResponseBody } from "@/shared/api/type"; // 응답 타입 정의 가져오기

// 사용자 정보 인터페이스 정의
export interface MyInfo {
  id: number; // 사용자 ID
  email: string; // 사용자 이메일
  name: string; // 사용자 이름
  phone: string; // 사용자 전화번호
  address: string; // 사용자 주소
  role: string; // 사용자 역할
}

// 사용자 정보를 가져오는 GET 요청을 보내는 함수
export const handleGetUserInfo = async () => {
  try {
    const response: ResponseBody<MyInfo> = await authInstance.get(`/userInfo`);
    return response.data;
  } catch (error) {
    console.error("Fetching user info failed:", error);
    throw error;
  }
};
