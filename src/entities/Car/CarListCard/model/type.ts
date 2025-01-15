import { Car } from "../../type";

export type CarListCardProps = Pick<
  Car,
  | "mainImage"
  | "name"
  | "like"
  | "marketplaceRegistrationDate"
  | "mileage"
  | "price"
  | "id"
  | "isLike"
>;
