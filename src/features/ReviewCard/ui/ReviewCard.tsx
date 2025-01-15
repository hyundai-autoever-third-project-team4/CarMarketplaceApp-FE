import { ReviewCardProps } from "@/features/ReviewCard/model/type";
import * as S from "./ReviewCard.style";
import { Text } from "@/shared/ui/Text";
import CloseIcon from "@/shared/assets/Close.svg";
import { RatingChart } from "@/shared/ui/RatingChart";
import { DefaultPopup } from "@/shared/ui/DefaultPopup";
import { useState } from "react";

export function ReviewCard({
  carName,
  rating,
  reviewContent,
  reviewDate,
  mainImg,
}: ReviewCardProps) {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handlePopupOpen = () => {
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
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
            content={"정말 작성한 리뷰를 삭제하시겠습니까?"}
          ></DefaultPopup>
        </S.PopupContainer>
      )}
    </S.Container>
  );
}
