import { Text } from "@/shared/ui/Text";
import * as S from "./NearReserveBox.style";
import ReserveImg from "@/shared/assets/reserve_icon.svg";
import { NearReservationCard } from "@/entities/Reservation/NearReservationCard/indet";
import { ReservationItem } from "@/widgets/NearReserveBox/model/type";

export function NearReserveBox({
  carName,
  mainImage,
  driveCenter,
  reservationDate,
  reservationTime,
}: ReservationItem) {
  return (
    <S.Container>
      <S.Title>
        <S.ReserveImg src={ReserveImg} />
        <Text fontType="sub1">가까운 예약 내역</Text>
      </S.Title>
      <NearReservationCard
        reservation_car_img={mainImage}
        marketplace_car_name={carName}
        marketplace_name={driveCenter}
        reservation_date={reservationDate}
        reservation_time={reservationTime}
      />
    </S.Container>
  );
}
