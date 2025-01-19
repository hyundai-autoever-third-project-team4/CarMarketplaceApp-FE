import { Car } from "@/entities/Car";

export type StatusType =
  | "PENDING_PURCHASE_APPROVAL"
  | "NOT_AVAILABLE_FOR_PURCHASE";

// MyPaymentCar 타입을 위한 정의
export type MyPaymentCar = Pick<
  Car,
  | "id"
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
