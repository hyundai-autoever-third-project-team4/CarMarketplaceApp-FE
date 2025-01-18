import { authInstance } from "@/shared/api/axiosInstance"; // Axios 인스턴스 가져오기
import { ResponseBody } from "@/shared/api/type"; // 응답 타입 정의 가져오기

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

// GET 요청을 보내어 사용자의 리뷰 목록을 가져오는 함수
export const handleMyPageReviews = async () => {
  try {
    const response: ResponseBody<CarReviews> = await authInstance.get(
      `/mypage/reviews`
    );
    return response.data;
  } catch (error) {
    console.error("Fetching my page reviews failed:", error);
    throw error;
  }
};

// 리뷰를 삭제하는 함수
export const handleDeleteReview = async (reviewId: number) => {
  try {
    const response: ResponseBody<void> = await authInstance.delete(
      `/mypage/reviews/${reviewId}`
    );

    return response.data; // 삭제 성공 시 응답 데이터 반환 (void이므로 실제 데이터는 없음)
  } catch (error) {
    console.error("Deleting review failed:", error);
    throw error;
  }
};
