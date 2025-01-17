import { SellCarCardProps } from "@/entities/Car/CarCard";
import * as S from "./SellCarCard.style";
import { Text } from "@/shared/ui/Text";
import { Button } from "@/shared/ui/Button";

export function SellCarCard({
  name,
  registrationDate,
  mileage,
  licensePlate,
  status,
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
            String(mileage).replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
            "km"}
        </Text>
        <Text fontType="sub2" fontColor="darkGray">
          {licensePlate}
        </Text>
      </S.TextWrap>
      {status === "PENDING_SALE" ? (
        <Button text={"검수 대기 중"} size={"big"} disable={true} />
      ) : status === "SALE_APPROVED" ? (
        <Button
          text={"검수 완료 - 측정가를 확인해보세요!"}
          size={"big"}
          buttonClick={onClick}
        />
      ) : null}
    </S.Container>
  );
}
