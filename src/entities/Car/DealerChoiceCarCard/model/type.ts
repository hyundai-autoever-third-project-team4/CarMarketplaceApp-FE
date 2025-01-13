import { Car } from "../../type";

export type CardType = "main" | "less" | "more";

export type DealerChoiceCar = Pick<
  Car,
  "id" | "mainImage" | "name" | "registrationDate" | "mileage" | "price"
>;

export type DealerChoiceCarCardProps = DealerChoiceCar & {
  cardType: CardType;
};
