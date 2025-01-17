import { authInstance } from "@/shared/api/axiosInstance";
import { ResponseBody } from "@/shared/api/type";

export interface LikedCar {
  id: number; // 차량 ID
  carId: string; // 차량 고유 ID
  name: string; // 차량 이름
  mainImageUrl: string; // 차량 메인 이미지 URL
  registrationDate: string; // 최초 등록일
  mileage: number; // 주행 거리
  licensePlate: string; // 차량 번호판
  price: number; // 가격
}

export interface LikedCars {
  cars: LikedCar[];
}

// GET 요청을 보내는 함수
export const handleLikedCar = async () => {
  try {
    const response: ResponseBody<LikedCars> = await authInstance.get(
      `/mypage/like`
    );
    return response.data;
  } catch (error) {
    console.error("Car detail fetch failed:", error);
    throw error;
  }
};
