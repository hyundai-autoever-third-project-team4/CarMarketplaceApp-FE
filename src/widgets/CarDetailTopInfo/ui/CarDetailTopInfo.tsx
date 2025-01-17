import { Text } from "@/shared/ui/Text";
import * as S from "./CarDetailTopInfo.style";
import ReservationImg from "@/shared/assets/location.svg";
import { Button } from "@/shared/ui/Button";

export interface CarTopInfoProps {
  name: string;
  registrationDate: string;
  mileage: number;
}

export function CarDetailTopInfo() {
  return (
    <S.Container>
      <S.CarNameArea>
        <Text fontType="sub1" fontWeight="medium">
          2023 GV70 가솔린 2.5 터보 AWD 스탠다드 디자인
        </Text>
      </S.CarNameArea>
      <S.SubInfoArea>
        <Text fontType="sub2" fontColor="darkGray">
          22년 08월 26,818km
        </Text>
      </S.SubInfoArea>
      <S.ReservationArea>
        <S.ReservationLeftWrap>
          <S.ReservationImg src={ReservationImg} />
          <Text fontType="sub2">가산 디지털 단지 시승소</Text>
        </S.ReservationLeftWrap>
        <Button text="시승 예약하기" size="small" />
      </S.ReservationArea>
      <S.PriceArea>
        <Text fontType="subTitle">4850만원</Text>
      </S.PriceArea>
    </S.Container>
  );
}
