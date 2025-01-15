import { Rating } from "@mui/material";
import starIcon from "../../../assets/star.svg";
import theme from "@/shared/styles/theme";
import DynamicSVG from "../../DynamicSVG/DynamicSVG";
import { RatingChartProps } from "../model/RatingChart.type";

export function RatingChart({
  rate,
  readOnly,
  setRating,
  starSize,
}: RatingChartProps) {
  return (
    <Rating
      name="RatingChart"
      onChange={(_, value) => {
        setRating ? setRating(Number(value)) : "";
      }}
      value={rate}
      precision={readOnly ? 0.1 : 0.5}
      readOnly={readOnly}
      icon={
        <DynamicSVG
          svgUrl={starIcon}
          width={starSize ? starSize : 40}
          height={starSize ? starSize : 40}
          color={theme.colors.primary4}
        />
      }
      emptyIcon={
        <DynamicSVG
          svgUrl={starIcon}
          width={starSize ? starSize : 40}
          height={starSize ? starSize : 40}
          color={theme.colors.lightGray}
        />
      }
    />
  );
}
