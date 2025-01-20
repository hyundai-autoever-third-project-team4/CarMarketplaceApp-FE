import { authInstance } from "@/shared/api/axiosInstance";
import { ResponseBody } from "@/shared/api/type";

export interface MySellCar {
  id: string; // 차량 ID
  name: string; // 차량 이름
  registrationDate: string; // 등록일
  mileage: number; // 주행 거리
  licensePlate: string; // 차량 번호판
  price?: number | null; // 가격 (선택적이며 null 가능)
  mainImage?: string; // 메인 이미지 URL (선택적)
  status: string; // 차량 상태 (예: "Pending sale", "Sale approved", 등)
}

export interface MySellCars {
  userSellCarList: MySellCar[];
}

// GET 요청을 보내는 함수
export const handleMySellCar = async () => {
  try {
    const response: ResponseBody<MySellCars> = await authInstance.get(
      `/mypage/sell`
    );
    return response.data;
  } catch (error) {
    console.error("Car sell fetch failed:", error);
    throw error;
  }
};

// 거절 요청을 보내는 함수
export const handleReject = async (carId: string) => {
  try {
    const response: ResponseBody<string> = await authInstance.delete(
      `/cars/${carId}`
    );
    return response.data;
  } catch (error) {
    console.error("Car sell fetch failed:", error);
    throw error;
  }
};

// 판매 승인 요청을 보내는 함수
export const handleCompleteSale = async (carId: string) => {
  try {
    const response: ResponseBody<string> = await authInstance.put(
      `/car/sale/complete-sale?carId=${carId}`
    );
    return response.data;
  } catch (error) {
    console.error("Car sell fetch failed:", error);
    throw error;
  }
};
