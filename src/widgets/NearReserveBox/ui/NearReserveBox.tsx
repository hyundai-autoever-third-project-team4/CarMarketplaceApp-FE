import { Text } from "@/shared/ui/Text";
import * as S from "./NearReserveBox.style";
import ReserveImg from "@/shared/assets/reserve_icon.svg";
import { NearReservationCard } from "@/entities/Reservation/NearReservationCard/indet";
import NearReservationCarMockData from "@/entities/Reservation/NearReservationCard/api/MockData";

export function NearReserveBox() {
  return (
    <S.Container>
      <S.Title>
        <S.ReserveImg src={ReserveImg} />
        <Text fontType="sub1">가까운 예약 내역</Text>
      </S.Title>
      <NearReservationCard
        reservation_car_img={NearReservationCarMockData.reservation_car_img}
        marketplace_car_name={NearReservationCarMockData.marketplace_car_name}
        marketplace_name={NearReservationCarMockData.marketplace_name}
        reservation_date={NearReservationCarMockData.reservation_date}
        reservation_time={NearReservationCarMockData.reservation_time}
      />
    </S.Container>
  );
}
