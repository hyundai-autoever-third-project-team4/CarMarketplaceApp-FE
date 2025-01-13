export interface RatingChartProps {
  rate: number;
  readOnly?: boolean;
  setRating: (value: number) => void;
}
