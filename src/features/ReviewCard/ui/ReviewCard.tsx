import { ReviewCardProps } from "@/features/ReviewCard/model/type";
import * as S from "./ReviewCard.style";
import { Text } from "@/shared/ui/Text";
import CloseIcon from "@/shared/assets/Close.svg";
import { RatingChart } from "@/shared/ui/RatingChart";
import { DefaultPopup } from "@/shared/ui/DefaultPopup";
import { useState } from "react";
import { handleDeleteReview } from "@/features/ReviewCard/api/api";
import { useQueryClient } from "@tanstack/react-query";

export function ReviewCard({
  carName,
  rating,
  reviewContent,
  reviewDate,
  mainImg,
  reviewId,
}: ReviewCardProps) {
  const queryClient = useQueryClient(); // QueryClient 인스턴스 가져오기
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handlePopupOpen = () => {
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  const handleDeleteReviewClick = async (reviewId: number) => {
    await handleDeleteReview(reviewId);

    queryClient.invalidateQueries<any>(["myReview"]); // "myReview" 쿼리 무효화하여 다시 가져오기
    setPopupOpen(false);
  };

  return (
    <S.Container>
      <S.TitleWrap>
        <Text fontType="sub1">{carName}</Text>
        <S.CloseImg src={CloseIcon} onClick={handlePopupOpen} />
      </S.TitleWrap>
      <Text fontType="sub2" fontColor="darkGray">
        {reviewDate}
      </Text>
      <S.RatingWrap>
        <RatingChart rate={rating} readOnly={true} starSize={20} />
      </S.RatingWrap>
      <S.ContentWrap>
        <Text fontType="sub2">{reviewContent}</Text>
      </S.ContentWrap>
      <S.CarImg src={mainImg} />
      {isPopupOpen && (
        <S.PopupContainer>
          <DefaultPopup
            isLoginPopup={true}
            open={isPopupOpen}
            handleClose={handlePopupClose}
            handleConfirmClick={() => handleDeleteReviewClick(reviewId)}
            content={"정말 작성한 리뷰를 삭제하시겠습니까?"}
          ></DefaultPopup>
        </S.PopupContainer>
      )}
    </S.Container>
  );
}
