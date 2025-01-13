export interface Car {
  id: string; // 차량 고유 식별자
  brand: string; // 브랜드
  model: string; // 모델명
  driveType: string; // 구동 방식
  engineCapacity: number; // 엔진 용량 (cc)
  exteriorColor: string; // 외장 색상
  interiorColor: string; // 내장 색상
  colorType: string; // 색상 종류
  fuelType: string; // 연료 종류
  licensePlate: string; // 차량 번호판
  mileage: number; // 주행 거리 (km)
  modelYear: number; // 연식
  name: string; // 차량 이름
  price: number; // 가격
  registrationDate: string; // 차량 등록일
  marketplaceRegistrationDate: Date; // 마켓플레이스 등록일
  seatingCapacity: number; // 좌석 수
  transmission: string; // 변속기 종류
  vehicleType: string; // 차량 종류
  testDriverCenterId?: number; // 시승 센터 ID (nullable)
  status: string; // 상태
  mainImage: string; // 메인 이미지 URL
  carImage: string[]; // 예상되는 이미지 배열
  carOption: CarOption[];
  carExtraOption: CarExtraOption[];
  like: number;
  isLike: boolean;
}

export interface CarOption {
  optionId: string;
  isPresent: boolean;
}

export interface CarExtraOption {
  name: string;
  price: number;
}

export type PopularCar = Pick<Car, "id" | "mainImage" | "name" | "like">;
