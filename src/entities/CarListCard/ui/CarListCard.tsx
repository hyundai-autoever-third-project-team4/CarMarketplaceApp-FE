import { CarListCardProps } from "@/entities/CarListCard/model/CarListCardProps";
import * as S from "./CarListCard.style";
import { Text } from "@/shared/ui/Text";
import likeImg from "@/shared/assets/heart.svg";
import { useNavigate } from "react-router-dom";

export function CarListCard({
  id,
  carImg,
  name,
  registrationDate,
  mileage,
  like,
  price,
}: CarListCardProps) {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/carDetail/${id}`);
  };
  return (
    <S.Container onClick={handleCardClick}>
      <S.CarImg src={carImg} />
      <Text fontType="subTitle">{name}</Text>
      <S.MiddleWrap>
        <Text fontType="sub1" fontColor="darkGray">
          {registrationDate +
            " " +
            String(mileage).replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
            "km"}
        </Text>
        <S.LikeWrap>
          <S.LikeImg src={likeImg} />
          <Text fontType="sub1" fontColor="primary">
            {String(like)}
          </Text>
        </S.LikeWrap>
      </S.MiddleWrap>
      <Text fontType="subTitle">{String(price) + "만원"}</Text>
    </S.Container>
  );
}
