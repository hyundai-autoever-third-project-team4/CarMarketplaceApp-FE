import { Text } from "@/shared/ui/Text";
import * as S from "./MyLike.style";
import { CarCard } from "@/entities/Car";
import { useNavigate } from "react-router-dom";
import NoCarIcon from "@/shared/assets/no_car.svg";
import { handleLikedCar, LikedCars } from "@/pages/MyLike/api/api";
import { useQuery } from "@tanstack/react-query";
import { CustomLoading } from "@/shared/ui/CustomLoading";

export function MyLike() {
  const navigate = useNavigate();
  const {
    data: carLike,
    isFetching,
    isError,
  } = useQuery<LikedCars>({
    queryKey: ["carLike"],
    queryFn: () => handleLikedCar(),
  });

  const handleCarClick = (carId: string) => {
    navigate(`/carDetail/${carId}`);
  };

  console.log(carLike);

  return (
    <>
      {isFetching || isError || !carLike ? (
        <CustomLoading text={"로딩 중입니다..."} middle={true} />
      ) : (
        <S.Container>
          <S.Title>
            <Text fontType="title">찜한 차량</Text>
          </S.Title>
          {carLike?.cars.length !== 0 ? (
            carLike.cars.map((car) => (
              <div key={car.carId} onClick={() => handleCarClick(car.carId)}>
                <CarCard
                  id={String(car.id)}
                  name={car.name}
                  mainImage={car.mainImageUrl}
                  registrationDate={car.registrationDate}
                  mileage={car.mileage}
                  licensePlate={car.licensePlate}
                  price={car.price}
                />
                <S.MarginBottom />
              </div>
            ))
          ) : (
            <S.NoCarContainer>
              <S.NoCarImg src={NoCarIcon} />
              <Text fontType="subTitle">찜한 차량이 없습니다.</Text>
              <S.NoCarSubText>
                <Text fontType="sub1" fontColor="primary">
                  구매하고 싶으신 차량에 ♡아이콘을 클릭해서
                </Text>
                <Text fontType="sub1" fontColor="primary">
                  찜한 차량이 등록되었을 때 푸쉬알림을 받아보세요!
                </Text>
              </S.NoCarSubText>
            </S.NoCarContainer>
          )}
        </S.Container>
      )}
    </>
  );
}
