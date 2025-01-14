import { ReservationCarListCardProps } from "@/entities/Reservation/types";
import * as S from "./ReservationCarListCard.style";
import { Text } from "@/shared/ui/Text";
import LocationImg from "@/shared/assets/location_icon.svg";
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
      <S.CarImg src={reservation_car_img} />
      <S.TextArea>
        <Text fontType="sub1" fontWeight="bold">
          {marketplace_car_name}
        </Text>
        <Text fontSize={12} fontColor="darkGray" fontWeight="bold">
          {marketplace_name}
        </Text>
        <Text fontType="sub1" fontWeight="bold">
          {reservation_date + reservation_time}
        </Text>
      </S.TextArea>
    </S.Container>
  );
}
