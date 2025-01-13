import { Text } from "@/shared/ui/Text";
import { DealerChoiceCarCardProps } from "../model/type";
import * as S from "./DealerChoiceCarCard.style";
import pick1 from "@shared/assets/picking1.svg";
import pick2 from "@shared/assets/picking2.svg";

export function DealerChoiceCarCard({
  id,
  mainImage,
  mileage,
  name,
  registrationDate,
  price,
  cardType,
}: DealerChoiceCarCardProps) {
  return (
    <S.Container $cardType={cardType}>
      <S.CarImg src={mainImage} />
      {cardType === "main" && (
        <>
          <S.Picking1 src={pick1} />
          <S.Picking2 src={pick2} />
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
