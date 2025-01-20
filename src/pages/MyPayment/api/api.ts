import { authInstance } from "@/shared/api/axiosInstance";
import { ResponseBody } from "@/shared/api/type";

// 차량 정보 인터페이스
export interface CarBuy {
  id: string;
  carName: string;
  licensePlate: string;
  registrationDate: string;
  mileage: number;
  price: number;
  mainImage: string;
  status: string;
  isReviewed: boolean;
}

// 판매 차량 목록 인터페이스
export interface BuyCarListResponse {
  userPurchaseCarList: CarBuy[];
}

// GET 요청을 보내는 함수
export const handleBuyCarList = async () => {
  try {
    const response: ResponseBody<BuyCarListResponse> = await authInstance.get(
      `/mypage/purchase`
    );
    return response.data;
  } catch (error) {
    console.error("Car purchase fetch failed:", error);
    throw error;
  }
};
