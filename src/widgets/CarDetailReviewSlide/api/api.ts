import { noAuthInstance } from "@/shared/api/axiosInstance";
import { ResponseBody } from "@/shared/api/type";

// 이미지 인터페이스 정의
export interface ReviewImage {
  imageId: number; // 이미지 ID
  imageUrl: string; // 이미지 URL
  reviewId: number; // 리뷰 ID
}

// 차량 리뷰 인터페이스 정의
export interface CarReview {
  reviewId: number; // 리뷰 ID
  starRate: number; // 별점
  content: string; // 리뷰 내용
  createdAt: string; // 생성일
  carName: string; // 차량 이름
  carId: string; // 차량 ID
  carModel: string; // 차량 모델
  writerEmail: string; // 작성자 이메일
  images: ReviewImage[]; // 이미지 배열
}

// 차량 리뷰 리스트 인터페이스 정의
export interface CarReviews {
  reviewInfoList: CarReview[]; // 리뷰 정보 리스트
}

// GET 요청을 보내는 함수
export const handleCarReview = async (carId: string) => {
  try {
    const response: ResponseBody<CarReviews> = await noAuthInstance.get(
      `/cars/${carId}/review`
    );
    return response.data;
  } catch (error) {
    console.error("Car Review fetch failed:", error);
    throw error;
  }
};
