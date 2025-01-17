import { Text } from "@/shared/ui/Text";
import * as S from "./CarDetailTopInfo.style";
import ReservationImg from "@/shared/assets/location.svg";
import { Button } from "@/shared/ui/Button";

export interface CarTopInfoProps {
  name: string;
  registrationDate: string;
  mileage: number;
  testDriveCenterName: string;
}

export function CarDetailTopInfo({
  name,
  registrationDate,
  mileage,
  testDriveCenterName,
}: CarTopInfoProps) {
  return (
    <S.Container>
      <S.CarNameArea>
        <Text fontType="sub1" fontWeight="medium">
          {name}
        </Text>
      </S.CarNameArea>
      <S.SubInfoArea>
        <Text fontType="sub2" fontColor="darkGray">
          {registrationDate} {mileage}
        </Text>
      </S.SubInfoArea>
      <S.ReservationArea>
        <S.ReservationLeftWrap>
          <S.ReservationImg src={ReservationImg} />
          <Text fontType="sub2">{testDriveCenterName}</Text>
        </S.ReservationLeftWrap>
        <Button text="시승 예약하기" size="small" />
      </S.ReservationArea>
      <S.PriceArea>
        <Text fontType="subTitle">{mileage / 10000}만원</Text>
      </S.PriceArea>
    </S.Container>
  );
}
