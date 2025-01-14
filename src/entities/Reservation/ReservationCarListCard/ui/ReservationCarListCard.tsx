import { ReservationCarListCardProps } from "@/entities/Reservation/types";
import * as S from "./ReservationCarListCard.style";
import { Text } from "@/shared/ui/Text";
import LocationImg from "@/shared/assets/location.svg";
import TimeImg from "@/shared/assets/clock.svg";

export function ReservationCarListCard({
  reservation_car_img,
  marketplace_name,
  marketplace_car_name,
  reservation_date,
  reservation_time,
}: ReservationCarListCardProps) {
  return (
    <S.Container>
      <S.CarImg src={reservation_car_img || ""} />
      <S.TextArea>
        <Text fontType="sub2" fontWeight="regular">
          {marketplace_car_name}
        </Text>
        <S.TextWrap>
          <S.IconImg src={LocationImg} />
          <Text fontType="sub2">{marketplace_name}</Text>
        </S.TextWrap>
        <S.TextWrap>
          <S.IconImg src={TimeImg} />
          <Text fontType="sub2">
            {reservation_date + " " + reservation_time}
          </Text>
        </S.TextWrap>
      </S.TextArea>
    </S.Container>
  );
}
