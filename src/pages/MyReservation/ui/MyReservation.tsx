import * as S from "./MyReservation.style";
import { ReservationCarListCard } from "@/entities/Reservation";
import { Text } from "@/shared/ui/Text";
import NoReservationIcon from "@/shared/assets/no_reservation.svg";
import ReservationCarMockData from "@/entities/Reservation/ReservationCarListCard/api/MockData";

export function MyReservation() {
  return (
    <S.Container>
      <S.Title>
        <Text fontType="title">시승 예약 내역</Text>
      </S.Title>
      {ReservationCarMockData ? (
        ReservationCarMockData.map((car, index) => (
          <div key={index}>
            <ReservationCarListCard
              reservation_car_img={car.reservation_car_img}
              marketplace_car_name={car.marketplace_car_name}
              marketplace_name={car.marketplace_name}
              reservation_date={car.reservation_date}
              reservation_time={car.reservation_time}
            />
            <S.MarginBottom />
          </div>
        ))
      ) : (
        <S.NoDataContainer>
          <S.NoDataImg src={NoReservationIcon} />
          <Text fontType="subTitle">시승 예약 내역이 없습니다.</Text>
          <S.NoDataSubText>
            <Text fontType="sub1" fontColor="primary">
              원하는 차량의 시승을 예약해보세요!
            </Text>
          </S.NoDataSubText>
        </S.NoDataContainer>
      )}
    </S.Container>
  );
}
