import { noAuthInstance } from "@/shared/api/axiosInstance";
import { ResponseBody } from "@/shared/api/type";

export interface CarDetailInfo {
  id: string;
  carDetails: CarDetails;
  testDriveCenterName: string;
  price: number;
  marketplaceRegistrationDate: string; // ISO 8601 형식의 날짜
  status: string;
  mainImage: string;
  LikeCount: number; // 큰 숫자 처리
  carMarketplaceCarExtraOptionDtos: CarExtraOption[];
  marketplaceCarImageDtos: CarImage[];
  marketplaceCarOptionInfoDtos: CarOptionInfo[];
  reviewCreateResponses: ReviewResponse[];
}

export interface CarDetails {
  brand: string;
  model: string;
  driveType: string;
  engineCapacity: number; // 정수형
  exteriorColor: string;
  interiorColor: string;
  colorType: string;
  fuelType: string;
  licensePlate: string;
  mileage: number; // 정수형
  modelYear: number; // 정수형
  name: string;
  seatingCapacity: number; // 정수형
  transmission: string;
  vehicleType: string;
  registrationDate: string;
}

export interface CarExtraOption {
  id: number;
  marketplaceCarId: string;
  name: string;
  price: number;
}

export interface CarImage {
  id: number;
  marketplaceCarId: string;
  imageUrl: string;
}

export interface CarOptionInfo {
  id: number;
  marketplaceCarId: string;
  optionId: number;
  optionName: string;
  optionDescription: string;
  optionImg: string;
  isPresent: boolean;
}

export interface ReviewResponse {
  reviewId: number;
  starRate: number; // 소수형
  content: string;
  createdAt: string; // ISO 8601 형식의 날짜
  message: string;
}

// GET 요청을 보내는 함수
export const handleCarDetailInfo = async (carId: string) => {
  try {
    const response: ResponseBody<CarDetailInfo> = await noAuthInstance.get(
      `/car/${carId}/detail`
    );
    return response.data;
  } catch (error) {
    console.error("Car detail fetch failed:", error);
    throw error;
  }
};
