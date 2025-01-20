import { Text } from "@/shared/ui/Text";
import * as S from "./ReviewModal.style";
import { RatingChart } from "@/shared/ui/RatingChart";
import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  CarReviewDetail,
  handleCarReviewById,
} from "@/entities/Review/ReviewModal/api/api";
import { useQuery } from "@tanstack/react-query";
import { CustomLoading } from "@/shared/ui/CustomLoading";

// 리뷰 모달 컴포넌트
export function ReviewModal({ reviewId }: { reviewId: number }) {
  const {
    data: reviewDetail,
    isFetching,
    isError,
  } = useQuery<CarReviewDetail>({
    queryKey: ["carReviewDetail", reviewId], // 쿼리 키
    queryFn: () => handleCarReviewById(reviewId), // API 호출
  });

  if (isFetching) {
    return <CustomLoading text={"로딩 중 입니다..."} />; // 로딩 상태 처리
  }

  if (isError) {
    return <div>Error loading review.</div>; // 에러 상태 처리
  }

  // 이메일 포맷팅 함수
  const formatEmail = (email: string) => {
    const [localPart, domain] = email.split("@");
    const maskedPart =
      localPart.length > 3 ? localPart.slice(0, 3) + "****" : localPart;
    return `${maskedPart}@${domain}`;
  };

  return (
    <>
      {reviewDetail ? (
        <S.Container>
          <S.UserTextArea>
            <Text fontType="sub2">
              {formatEmail(reviewDetail.writerEmail)} ∙{" "}
              {new Date(reviewDetail.createdAt).toLocaleDateString()}
            </Text>
          </S.UserTextArea>
          <RatingChart readOnly={true} rate={reviewDetail.starRate} />
          <S.CarNameArea>
            <Text fontType="sub1">
              {reviewDetail.carModel} {reviewDetail.carName}
            </Text>
          </S.CarNameArea>
          <S.StyledSwiper
            pagination={true}
            modules={[Pagination]}
            className="mySwiper"
            loop={true}
          >
            {reviewDetail.images.map((image) => (
              <SwiperSlide key={image.imageId}>
                <img
                  src={image.imageUrl}
                  alt={`Review image ${image.imageId}`}
                  style={{ width: "100%", height: "auto" }}
                />
              </SwiperSlide>
            ))}
          </S.StyledSwiper>
          <Text fontType="sub2"> {reviewDetail.content}</Text>
        </S.Container>
      ) : (
        <>오류 발생</>
      )}
    </>
  );
}
