import { CarListCard } from "@/entities/Car/CarListCard";
import { CarListCardProps } from "@/entities/Car/CarListCard";
import * as S from "./CarListComponent.style";

interface CarListComponentProps {
  carList: CarListCardProps[];
}

export function CarListComponent({ carList }: CarListComponentProps) {
  return (
    <S.Container>
      {carList.map((car, index) => (
        <CarListCard
          key={index}
          mainImage={car.mainImage}
          id={car.id}
          name={car.name}
          marketplaceRegistrationDate={car.marketplaceRegistrationDate}
          mileage={car.mileage}
          like={car.like}
          price={car.price}
          isLike={car.isLike}
        />
      ))}
    </S.Container>
  );
}

// const mockData = [
//   {
//     id: "1",
//     mainImage:
//       "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/HIG241028009973/PRD602_233.JPG/dims/crop/2304x1536+600+770/resize/380x253/optimize", // 실제 이미지 URL로 변경
//     name: "2023 GV70 가솔린 2.5 터보 AWD 스탠다드 디자인",
//     registrationDate: "22년 08월",
//     mileage: 26818,
//     like: 485,
//     price: 5700,
//     isLike: true,
//   },
//   {
//     id: "2",
//     mainImage:
//       "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/HIG241028009973/PRD602_233.JPG/dims/crop/2304x1536+600+770/resize/380x253/optimize", // 실제 이미지 URL로 변경
//     name: "2023 현대 소나타",
//     registrationDate: "23년 01월",
//     mileage: 15000,
//     like: 320,
//     price: 3024,
//     isLike: true,
//   },
//   {
//     id: "3",
//     mainImage:
//       "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/HIG241028009973/PRD602_233.JPG/dims/crop/2304x1536+600+770/resize/380x253/optimize", // 실제 이미지 URL로 변경
//     name: "2023 기아 K5",
//     registrationDate: "22년 11월",
//     mileage: 20000,
//     like: 256,
//     price: 2800,
//     isLike: false,
//   },
// ];
