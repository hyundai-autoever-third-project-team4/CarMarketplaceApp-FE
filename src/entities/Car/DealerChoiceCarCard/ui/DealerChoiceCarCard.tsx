import { Text } from "@/shared/ui/Text";
import { DealerChoiceCarCardProps } from "../model/type";
import * as S from "./DealerChoiceCarCard.style";
import pick1 from "@shared/assets/picking1.svg";
import pick2 from "@shared/assets/picking2.svg";
import morePick from "@shared/assets/morePick.svg";
import { useNavigate } from "react-router-dom";

export function DealerChoiceCarCard({
  id,
  mainImage,
  mileage,
  name,
  registrationDate,
  price,
  cardType,
}: DealerChoiceCarCardProps) {
  const navigate = useNavigate();

  const moveToDetail = () => {
    if (cardType === "main") navigate(`/carDetail/${id}`);
  };

  return (
    <S.Container $cardType={cardType} onClick={moveToDetail}>
      <S.CarImg src={mainImage} />
      {cardType === "main" && (
        <>
          <S.Picking1 src={pick1} />
          <S.Picking2 src={pick2} />
        </>
      )}
      {cardType === "more" && (
        <>
          <S.CarBack />
          <S.MorePick src={morePick} />
        </>
      )}
      {cardType === "less" && (
        <>
          <S.CarBack2 />
          <S.LessPick src={morePick} />
        </>
      )}
      <S.TextBox>
        <Text fontType="sub1">{name}</Text>
        <Text fontSize={12} fontColor="darkGray">
          {`${registrationDate} / ${mileage}km`}
        </Text>
        <Text fontType="sub1" fontWeight="bold">{`${price} 만원`}</Text>
      </S.TextBox>
    </S.Container>
  );
}
