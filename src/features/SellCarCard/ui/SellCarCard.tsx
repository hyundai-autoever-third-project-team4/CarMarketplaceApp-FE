import { SellCarCardProps } from "@/entities/Car/CarCard";
import * as S from "./SellCarCard.style";
import { Text } from "@/shared/ui/Text";
import { Button } from "@/shared/ui/Button";

export function SellCarCard({
  name,
  registrationDate,
  mileage,
  licensePlate,
  state,
  onClick,
}: SellCarCardProps) {
  return (
    <S.Container>
      <S.TextWrap>
        <Text fontType="sub1" fontWeight="bold">
          {name}
        </Text>
        <Text fontType="sub2" fontColor="darkGray">
          {registrationDate +
            " | " +
            String(mileage).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Text>
        <Text fontType="sub2" fontColor="darkGray">
          {licensePlate}
        </Text>
      </S.TextWrap>
      {state === "Pending sale" ? (
        <Button text={"검수 대기 중"} size={"big"} disable={true} />
      ) : state === "Sale approved" ? (
        <Button
          text={"검수 완료 - 측정가를 확인해보세요!"}
          size={"big"}
          buttonClick={onClick}
        />
      ) : null}
    </S.Container>
  );
}
