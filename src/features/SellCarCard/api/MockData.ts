import { SellCarCardProps } from "@/entities/Car/CarCard";

const mockSellCarData: SellCarCardProps[] = [
  {
    id: "1",
    mainImage: null,
    name: "2023 GV70 가솔린 2.5 터보 AWD 스탠다드 디자인",
    registrationDate: "2022-05-01",
    mileage: 1500,
    licensePlate: "12가 3456",
    price: null,
    state: "Pending sale",
  },
  {
    id: "2",
    mainImage:
      "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/HIG241028009973/PRD602_233.JPG/dims/crop/2304x1536+600+770/resize/380x253/optimize",
    name: "2029 GV70 파워엔진 24.5 부스터 Intel 스탠다드 디자인",
    registrationDate: "2021-07-15",
    mileage: 25000,
    licensePlate: "34나 5678",
    price: 2200,
    state: "Sale approved",
  },
  {
    id: "3",
    mainImage:
      "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/HIG241028009973/PRD602_233.JPG/dims/crop/2304x1536+600+770/resize/380x253/optimize",
    name: "2020 쌍용 티볼리",
    registrationDate: "2020-03-10",
    mileage: 30000,
    licensePlate: "56다 7890",
    price: 1800,
    state: "Available for purchase",
  },
  {
    id: "4",
    mainImage: null,
    name: "2023 테슬라 모델 3",
    registrationDate: "2023-01-20",
    mileage: 5000,
    licensePlate: "78라 9012",
    price: null,
    state: "Pending sale",
  },
  {
    id: "5",
    mainImage:
      "https://certified-static.hyundai.com/contents/goods/shootConts/tobepic/02/exterior/HIG241028009973/PRD602_233.JPG/dims/crop/2304x1536+600+770/resize/380x253/optimize",
    name: "2021 BMW 3시리즈",
    registrationDate: "2021-06-30",
    mileage: 12000,
    licensePlate: "90마 3456",
    price: 4500,
    state: "Sale approved",
  },
];

export default mockSellCarData;
