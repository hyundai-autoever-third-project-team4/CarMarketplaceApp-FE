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

type StatusType = "Pending sale" | "Sale approved" | "Available for purchase";

export type SellCarCardProps = Pick<
  Car,
  "id" | "name" | "registrationDate" | "mileage" | "licensePlate"
> & {
  price: number | null;
  state: StatusType;
  mainImage: string | null;
  onClick?: () => void;
};
