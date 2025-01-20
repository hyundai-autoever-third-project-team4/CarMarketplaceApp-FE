import { Car } from "../../type";

// CarCard prop 을 위한 타입
export type CarCardProps = Pick<
  Car,
  | "mainImage"
  | "name"
  | "registrationDate"
  | "mileage"
  | "licensePlate"
  | "price"
  | "id"
> & { onClick?: () => void; state?: string };

type StatusType = "PENDING_SALE" | "SALE_APPROVED" | "AVAILABLE_FOR_PURCHASE";

export type SellCarCardProps = Pick<
  Car,
  "id" | "name" | "registrationDate" | "mileage" | "licensePlate"
> & {
  price: number | null;
  status: StatusType;
  mainImage: string | null;
  onClick?: () => void;
};
