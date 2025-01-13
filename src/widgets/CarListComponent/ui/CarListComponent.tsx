import { CarListCard } from "@/entities/Car/CarListCard";
import * as S from "./CarListComponent.style";

export function CarListComponent() {
  return (
    <S.Container>
      {mockData.map((car, index) => (
        <CarListCard
          key={index}
          mainImage={car.mainImage}
          name={car.name}
          registrationDate={car.registrationDate}
          mileage={car.mileage}
          like={car.like}
          price={car.price}
        />
      ))}
    </S.Container>
  );
}

const mockData = [
  {
    mainImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsENlxBQiX6W3FofBYLzSIGjfdeztBlMv2Ag&s", // 실제 이미지 URL로 변경
    name: "2023 GV70 가솔린 2.5 터보 AWD 스탠다드 디자인",
    registrationDate: "22년 08월",
    mileage: 26818,
    like: 485,
    price: 5700,
  },
  {
    mainImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsENlxBQiX6W3FofBYLzSIGjfdeztBlMv2Ag&s", // 실제 이미지 URL로 변경
    name: "2023 현대 소나타",
    registrationDate: "23년 01월",
    mileage: 15000,
    like: 320,
    price: 3024,
  },
  {
    mainImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsENlxBQiX6W3FofBYLzSIGjfdeztBlMv2Ag&s", // 실제 이미지 URL로 변경
    name: "2023 기아 K5",
    registrationDate: "22년 11월",
    mileage: 20000,
    like: 256,
    price: 2800,
  },
];
