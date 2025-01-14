import { Car } from "../../type";

export type CarListCardProps = Pick<
  Car,
  | "mainImage"
  | "name"
  | "like"
  | "registrationDate"
  | "mileage"
  | "price"
  | "id"
  | "isLike"
>;
