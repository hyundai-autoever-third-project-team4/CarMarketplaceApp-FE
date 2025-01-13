import { Car } from "../../type";

// PopularCarCard 를 위한 타입
export type PopularCarCardProps = Pick<Car, "mainImage" | "name" | "like"> & {
  index: number;
};
