import {
  CAR_TYPES,
  MODELS,
  PRICES,
  MILEAGES,
  MODEL_YEARS,
  FUELS,
  COLORS,
  CAR_OPTIONS,
} from "./model";

export type CarType = (typeof CAR_TYPES)[number];
export type Model = (typeof MODELS)[number];
export type Price = (typeof PRICES)[number];
export type Mileage = (typeof MILEAGES)[number];
export type ModelYear = (typeof MODEL_YEARS)[number];
export type Fuel = (typeof FUELS)[number];
export type Color = (typeof COLORS)[number];
export type CarOption = (typeof CAR_OPTIONS)[number];

export interface SearchFormValue {
  param: string;
  carType: CarType[];
  model: Model[];
  prices: Price[];
  minPrice: Price | 0;
  maxPrice: Price | 0;
  minMileage: Mileage;
  maxMileage: Mileage;
  minModelYear: ModelYear;
  maxModelYear: ModelYear;
  fuelType: Fuel[];
  colorType: Color[];
  optionIds: number[];
}
