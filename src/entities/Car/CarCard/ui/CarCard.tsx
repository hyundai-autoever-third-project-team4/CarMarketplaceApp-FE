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
  state,
}: CarCardProps) {
  return (
    <S.Wrapper>
      <Text fontType="sub1" fontWeight="bold">
        {name}
      </Text>
      <S.Container>
        <div style={{ position: "relative" }}>
          <S.CarImg src={mainImage} onClick={onClick} />
          {state !== undefined ? (
            state === "Not available for purchase" ? (
              <S.StatusBox $isComplete={true}>구매 완료</S.StatusBox>
            ) : (
              <S.StatusBox $isComplete={false}>구매 대기</S.StatusBox>
            )
          ) : (
            <></>
          )}
        </div>
        <S.TextArea onClick={onClick}>
          <Text fontSize={12} fontColor="darkGray" fontWeight="bold">
            {`${registrationDate} | ${mileage}km`}
          </Text>
          <Text fontSize={12} fontColor="darkGray" fontWeight="bold">
            {licensePlate}
          </Text>
          <Text fontType="sub1" fontWeight="bold">
            {`${price / 10000}만원`}
          </Text>
        </S.TextArea>
      </S.Container>
    </S.Wrapper>
  );
}
