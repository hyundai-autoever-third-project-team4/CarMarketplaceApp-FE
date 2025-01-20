import * as S from "./CarDetailReviewSlide.style";
import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Text } from "@/shared/ui/Text";
import { RatingChart } from "@/shared/ui/RatingChart";
import {
  CarReviews,
  handleCarReview,
} from "@/widgets/CarDetailReviewSlide/api/api";
import { useQuery } from "@tanstack/react-query";
import { CustomLoading } from "@/shared/ui/CustomLoading";
import { DefaultModal } from "@/shared/ui/DefaultModal";
import { useState } from "react";
import { ReviewModal } from "@/entities/Review";

export function CarDetailReviewSlide({ carId }: { carId: string }) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [reviewDetailId, setReviewDetailId] = useState<number | null>(null);
  const {
    data: carReview,
    isFetching,
    isError,
  } = useQuery<CarReviews>({
    queryKey: ["carReview", carId], // carId를 쿼리 키에 추가
    queryFn: () => handleCarReview(carId),
    staleTime: 0,
  });

  const handleModalOpen = (id: number) => {
    setReviewDetailId(id);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  if (isFetching) {
    return <CustomLoading text={"로딩 중 입니다..."} />; // 로딩 상태 처리
  }

  if (isError) {
    return <div>Error loading reviews.</div>; // 에러 상태 처리
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작
    const year = String(date.getFullYear()).slice(-2); // 마지막 두 자리만 가져옴
    return `${day}.${month}.${year}`;
  };

  const formatEmail = (email: string) => {
    return email.split("@")[0]; // @ 앞부분만 반환
  };

  return (
    <S.Container>
      <S.StyledSwiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
        loop={true}
      >
        {carReview?.reviewInfoList.length !== 0 ? (
          carReview?.reviewInfoList.map((review) => (
            <SwiperSlide
              key={review.reviewId}
              onClick={() => handleModalOpen(review.reviewId)}
            >
              <S.TextWrap>
                <Text fontType="sub1">{review.carName}</Text>
              </S.TextWrap>
              <S.TextArea>
                <S.TextLeftArea>
                  <S.TextWrap>
                    <Text fontType="sub2" fontColor="gray">
                      {formatEmail(review.writerEmail) +
                        " ∙ " +
                        formatDate(review.createdAt)}
                    </Text>
                  </S.TextWrap>
                  <S.TextWrap>
                    <RatingChart
                      rate={review.starRate}
                      readOnly={true}
                      starSize={20}
                    />
                  </S.TextWrap>
                  <S.ContentsText>
                    <Text fontType="sub2">{review.content}</Text>
                  </S.ContentsText>
                </S.TextLeftArea>
                <S.ImgRightArea>
                  {review.images.length > 0 && (
                    <S.CarImg src={review.images[0].imageUrl} />
                  )}
                  {/* 첫 번째 이미지 사용 */}
                </S.ImgRightArea>
              </S.TextArea>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <S.NoText>아직 리뷰가 없습니다.</S.NoText>
          </SwiperSlide>
        )}
      </S.StyledSwiper>
      {reviewDetailId && (
        <DefaultModal
          open={isModalOpen}
          handleClose={handleModalClose}
          title={"리뷰 상세 보기"}
          children={<ReviewModal reviewId={reviewDetailId} />}
        ></DefaultModal>
      )}
    </S.Container>
  );
}
