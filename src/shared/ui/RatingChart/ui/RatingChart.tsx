import { Rating } from "@mui/material";
import starIcon from "../../../assets/star.svg";
import blankStarIcon from "@shared/assets/blankStar.svg";
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
        <img
          src={starIcon}
          width={starSize ? starSize : 40}
          height={starSize ? starSize : 40}
        />
      }
      emptyIcon={
        <img
          src={blankStarIcon}
          width={starSize ? starSize : 40}
          height={starSize ? starSize : 40}
        />
      }
    />
  );
}
