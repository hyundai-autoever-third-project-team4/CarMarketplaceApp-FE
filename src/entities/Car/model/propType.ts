import { Car } from "./type";

// CarCard prop 을 위한 타입
export type CarCardProps = Pick<
  Car,
  | "mainImage"
  | "name"
  | "registrationDate"
  | "mileage"
  | "licensePlate"
  | "price"
>;

export type PopularCarCardProps = Pick<Car, "mainImage" | "name" | "like"> & {
  index: number;
};
