import { ReservationCarListCardProps } from "@/entities/Reservation/types";
import * as S from "./NearReservationCard.style";
import { Text } from "@/shared/ui/Text";
import LocationImg from "@/shared/assets/location.svg";
import TimeImg from "@/shared/assets/clock.svg";

export function NearReservationCard({
  reservation_car_img,
  marketplace_name,
  marketplace_car_name,
  reservation_date,
  reservation_time,
}: ReservationCarListCardProps) {
  if (
    !reservation_car_img ||
    !marketplace_name ||
    !marketplace_car_name ||
    !reservation_date ||
    !reservation_time
  ) {
    return (
      <S.NullContainer>
        <Text fontType="sub2" fontWeight="demiLight">
          현재 시승 예약 내역이 없습니다.
        </Text>
      </S.NullContainer>
    );
  }

  return (
    <S.Container>
      <S.CarImg src={reservation_car_img} />
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
            {reservation_date + " " + reservation_time.slice(0, 5)}
          </Text>
        </S.TextWrap>
      </S.TextArea>
    </S.Container>
  );
}
