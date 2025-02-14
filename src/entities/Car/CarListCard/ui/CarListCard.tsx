import { CarListCardProps } from "../model/type";
import * as S from "./CarListCard.style";
import { Text } from "@/shared/ui/Text";
import likeImg from "@/shared/assets/heart.svg";
import fillLikeImg from "@/shared/assets/filled_heart.svg";
import { useNavigate } from "react-router-dom";

export function CarListCard({
  mainImage,
  name,
  marketplaceRegistrationDate,
  mileage,
  like,
  price,
  id,
  isLike,
}: CarListCardProps) {
  const navigate = useNavigate();

  const handleCarCardClick = () => {
    navigate(`/carDetail/${id}`);
  };

  return (
    <S.Container onClick={handleCarCardClick}>
      <S.CarImg src={mainImage} />
      <Text fontType="subTitle">{name}</Text>
      <S.MiddleWrap>
        <Text fontType="sub1" fontColor="darkGray">
          {marketplaceRegistrationDate +
            " | " +
            String(mileage).replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
            "km"}
        </Text>
        <S.LikeWrap>
          <S.LikeImg src={isLike ? fillLikeImg : likeImg} />
          <Text fontType="sub1" fontColor="primary">
            {String(like)}
          </Text>
        </S.LikeWrap>
      </S.MiddleWrap>
      <Text fontType="subTitle">{String(price / 10000) + "만원"}</Text>
    </S.Container>
  );
}
