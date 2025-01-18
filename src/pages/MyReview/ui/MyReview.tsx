import { Text } from "@/shared/ui/Text";
import * as S from "./MyReview.style";
import NoReviewIcon from "@/shared/assets/no_review.svg";
import { ReviewCard } from "@/features/ReviewCard/ui/ReviewCard";
import { useQuery } from "@tanstack/react-query";
import { CarReviews, handleMyPageReviews } from "@/features/ReviewCard/api/api";
import { CustomLoading } from "@/shared/ui/CustomLoading";

export function MyReview() {
  const {
    data: myReviewData,
    isFetching,
    isError,
  } = useQuery<CarReviews>({
    queryKey: ["myReview"], // 쿼리 키
    queryFn: handleMyPageReviews, // API 호출 함수
  });

  if (isFetching) {
    return <CustomLoading text={"로딩 중 입니다..."} />; // 로딩 상태 처리
  }

  if (isError) {
    return <div>Error loading reviews.</div>; // 에러 상태 처리
  }

  return (
    <S.Container>
      <S.Title>
        <Text fontType="title">나의 리뷰</Text>
      </S.Title>
      {myReviewData && myReviewData.reviewInfoList.length != 0 ? (
        myReviewData.reviewInfoList.map((review, index) => (
          <div key={index}>
            <ReviewCard
              carName={review.carName}
              reviewDate={new Date(review.createdAt).toLocaleDateString()} // 날짜 포맷
              rating={review.starRate} // 별점
              reviewContent={review.content}
              mainImg={review.images[0]?.imageUrl} // 첫 번째 이미지
              reviewId={review.reviewId}
            />
            <S.MarginBottom />
          </div>
        ))
      ) : (
        <S.NoCarContainer>
          <S.NoCarImg src={NoReviewIcon} />
          <Text fontType="subTitle">나의 차량 리뷰가 없습니다.</Text>
          <S.NoCarSubText>
            <Text fontType="sub1" fontColor="primary">
              구매하신 차량의 장단점을 작성해보세요!
            </Text>
          </S.NoCarSubText>
        </S.NoCarContainer>
      )}
    </S.Container>
  );
}
