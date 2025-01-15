import { Car } from "@/entities/Car";

export type StatusType =
  | "Pending purchase approval"
  | "Not available for purchase";

// MyPaymentCar 타입을 위한 정의
export type MyPaymentCar = Pick<
  Car,
  | "mainImage"
  | "name"
  | "registrationDate"
  | "mileage"
  | "licensePlate"
  | "price"
> & {
  isReviewed: boolean; // 추가적인 속성
  state: StatusType;
};
