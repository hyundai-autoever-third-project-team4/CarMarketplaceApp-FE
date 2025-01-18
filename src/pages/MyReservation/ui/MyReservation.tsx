import * as S from "./MyReservation.style";
import { ReservationCarListCard } from "@/entities/Reservation";
import { Text } from "@/shared/ui/Text";
import NoReservationIcon from "@/shared/assets/no_reservation.svg";
import {
  handleGetReservations,
  ReservationList,
} from "@/pages/MyReservation/api/api";
import { useQuery } from "@tanstack/react-query";
import { CustomLoading } from "@/shared/ui/CustomLoading";

export function MyReservation() {
  const {
    data: myReservation,
    isFetching,
    isError,
  } = useQuery<ReservationList>({
    queryKey: ["myReservation"], // 쿼리 키
    queryFn: handleGetReservations, // API 호출 함수
  });

  if (isFetching) {
    return <CustomLoading middle={true} text={"로딩 중 입니다..."} />; // 로딩 상태 처리
  }

  if (isError) {
    return <div>Error loading reviews.</div>; // 에러 상태 처리
  }

  return (
    <S.Container>
      <S.Title>
        <Text fontType="title">시승 예약 내역</Text>
      </S.Title>
      {myReservation && myReservation?.reservationList.length > 0 ? (
        myReservation.reservationList.map((car, index) => (
          <div key={index}>
            <ReservationCarListCard
              reservation_car_img={car.mainImage}
              marketplace_car_name={car.carName}
              marketplace_name={car.driveCenter}
              reservation_date={car.reservationDate}
              reservation_time={car.reservationTime.slice(0, 5)}
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
