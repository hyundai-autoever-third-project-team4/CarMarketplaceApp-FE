import { authInstance } from "@/shared/api/axiosInstance"; // Axios 인스턴스 가져오기
import { ResponseBody } from "@/shared/api/type"; // 응답 타입 정의 가져오기
import { ReservationItem } from "@/widgets/NearReserveBox";

// 사용자 정보 인터페이스 정의
export interface UserInfo {
  userName: string; // 사용자 이름
  reservation: ReservationItem[]; // 예약 항목 리스트
}

// 사용자 정보를 가져오는 GET 요청을 보내는 함수
export const handleGetUserInfo = async () => {
  try {
    const response: ResponseBody<UserInfo> = await authInstance.get(`/mypage`);
    return response.data; // 사용자 정보 반환
  } catch (error) {
    console.error("Fetching user info failed:", error);
    throw error;
  }
};
