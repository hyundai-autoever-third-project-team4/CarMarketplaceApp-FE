import { Text } from "@/shared/ui/Text";
import * as S from "./MyReview.style";
import NoReviewIcon from "@/shared/assets/no_review.svg";
import { mockReviewData } from "@/features/ReviewCard/api/MockData";
import { ReviewCard } from "@/features/ReviewCard/ui/ReviewCard";

export function MyReview() {
  return (
    <S.Container>
      <S.Title>
        <Text fontType="title">나의 리뷰</Text>
      </S.Title>
      {mockReviewData ? (
        mockReviewData.map((review, index) => (
          <div key={index}>
            <ReviewCard
              carName={review.carName}
              reviewDate={review.reviewDate}
              rating={review.rating}
              reviewContent={review.reviewContent}
              mainImg={review.mainImg}
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
