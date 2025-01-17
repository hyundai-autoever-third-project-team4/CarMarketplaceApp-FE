import { Text } from "@/shared/ui/Text";
import * as S from "./MyLike.style";
import { CarCard } from "@/entities/Car";
import { useNavigate } from "react-router-dom";
import NoCarIcon from "@/shared/assets/no_car.svg";
import { handleLikedCar, LikedCar, LikedCars } from "@/pages/MyLike/api/api";
import { useQuery } from "@tanstack/react-query";
import { CustomLoading } from "@/shared/ui/CustomLoading";

const mockData = [
  {
    id: "1",
    carId: 1,
    name: "2022 투싼(NX4) 가솔린 1.6 터보 2WD 모던",
    mainImage:
      "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/HIG241028009973/PRD602_233.JPG/dims/crop/2304x1536+600+770/resize/380x253/optimize",
    registrationDate: "2021-05-01",
    mileage: 15000,
    licensePlate: "12가 3456",
    price: 20000000,
  },
  {
    id: "2",
    carId: 2,
    name: "2022 딩동(DD4) 가솔린 1.6 터보 122WD 모던",
    mainImage:
      "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/HIG241028009973/PRD602_233.JPG/dims/crop/2304x1536+600+770/resize/380x253/optimize",
    registrationDate: "2020-07-15",
    mileage: 25000,
    licensePlate: "34나 5678",
    price: 22000000,
  },
  {
    id: "3",
    carId: 3,
    name: "2019 쌍용 티볼리",
    mainImage:
      "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/HIG241028009973/PRD602_233.JPG/dims/crop/2304x1536+600+770/resize/380x253/optimize",
    registrationDate: "2019-03-10",
    mileage: 30000,
    licensePlate: "56다 7890",
    price: 18000000,
  },
  {
    id: "4",
    carId: 4,
    name: "2022 테슬라 모델 3",
    mainImage:
      "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/HIG241028009973/PRD602_233.JPG/dims/crop/2304x1536+600+770/resize/380x253/optimize",
    registrationDate: "2022-01-20",
    mileage: 5000,
    licensePlate: "78라 9012",
    price: 50000000,
  },
  {
    id: "5",
    carId: 5,
    name: "2021 BMW 3시리즈",
    mainImage:
      "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/HIG241028009973/PRD602_233.JPG/dims/crop/2304x1536+600+770/resize/380x253/optimize",
    registrationDate: "2021-06-30",
    mileage: 12000,
    licensePlate: "90마 3456",
    price: 45000000,
  },
];

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
          {carLike.cars ? (
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
