import { authInstance } from "@/shared/api/axiosInstance";
import { ResponseBody } from "@/shared/api/type";

// 예약 항목 인터페이스 정의
export interface ReservationItem {
  carName: string; // 차량 이름
  mainImage: string; // 차량 메인 이미지 URL
  driveCenter: string; // 시승소 이름
  reservationDate: string; // 예약 날짜
  reservationTime: string; // 예약 시간
}

// 예약 리스트 인터페이스 정의
export interface ReservationList {
  reservationList: ReservationItem[]; // 예약 항목 리스트
}

// 예약 목록을 가져오는 GET 요청을 보내는 함수
export const handleGetReservations = async () => {
  try {
    const response: ResponseBody<ReservationList> = await authInstance.get(
      `/mypage/reservations`
    );
    return response.data; // 예약 리스트 반환
  } catch (error) {
    console.error("Fetching reservations failed:", error);
    throw error;
  }
};
