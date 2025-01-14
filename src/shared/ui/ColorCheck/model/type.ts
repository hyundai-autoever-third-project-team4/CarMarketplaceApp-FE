import { Color } from "@/features/SearchForm/model/type";

export interface ColorCheckProps {
  index: number;
  isChecked: boolean;
  onClick: () => void;
  color: Color;
}
