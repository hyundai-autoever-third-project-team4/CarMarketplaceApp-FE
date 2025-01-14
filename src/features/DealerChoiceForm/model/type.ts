import { CAR_TYPES } from "./model";

export type CarType = (typeof CAR_TYPES)[number];

export interface FormValues {
  budget: number | null;
  carTypes: CarType[];
}

export interface FormProps {
  onClick: (data: FormValues) => void;
}
