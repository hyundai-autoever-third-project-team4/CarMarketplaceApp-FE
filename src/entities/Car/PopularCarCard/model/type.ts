import { Car } from "../../type";

export type PopularCar = Pick<Car, "id" | "mainImage" | "name" | "like">;

// PopularCarCard 를 위한 타입
export type PopularCarCardProps = PopularCar & {
  index: number;
};
