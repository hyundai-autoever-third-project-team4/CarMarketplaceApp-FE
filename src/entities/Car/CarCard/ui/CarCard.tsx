import * as S from "./CarCard.style";
import { Text } from "@shared/ui/Text";
import { CarCardProps } from "./../model/type";

export function CarCard({
  mainImage,
  name,
  registrationDate,
  mileage,
  licensePlate,
  price,
  onClick,
}: CarCardProps) {
  return (
    <S.Container>
      <S.CarImg src={mainImage} onClick={onClick} />
      <S.TextArea onClick={onClick}>
        <Text fontType="sub1" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize={12} fontColor="darkGray" fontWeight="bold">
          {`${registrationDate} / ${mileage}km`}
        </Text>
        <Text fontSize={12} fontColor="darkGray" fontWeight="bold">
          {licensePlate}
        </Text>
        <Text fontType="sub1" fontWeight="bold">
          {`${price}만원`}
        </Text>
      </S.TextArea>
    </S.Container>
  );
}
