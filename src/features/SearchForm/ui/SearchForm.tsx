import { Text } from "@/shared/ui/Text";
import * as S from "./SearchForm.style";
import {
  UseFormHandleSubmit,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import {
  CAR_TYPES,
  MODELS,
  PRICES,
  //   MILEAGES,
  MODEL_YEARS,
  FUELS,
  COLORS,
  CAR_OPTIONS,
} from "../model/model";
import {
  SearchFormValue,
  CarType,
  Model,
  Price,
  Mileage,
  ModelYear,
  Fuel,
  Color,
} from "../model/type";
import { RadioButton } from "@/shared/ui/RadioButton";
import { Button } from "@/shared/ui/Button";
import { Slider } from "@mui/joy";
import { useState } from "react";
import { ColorCheck } from "@/shared/ui/ColorCheck";

export const DEFAULT_VALUE: SearchFormValue = {
  carTypes: [],
  models: [],
  prices: [],
  minPrice: 0,
  maxPrice: 0,
  minMileage: 0,
  maxMileage: 120000,
  minModelYear: 2018,
  maxModelYear: 2025,
  fuels: [],
  colors: [],
  carOptions: [],
} as const;

interface SearchFormProps {
  handleSubmit: UseFormHandleSubmit<SearchFormValue>;
  watch: UseFormWatch<SearchFormValue>;
  setValue: UseFormSetValue<SearchFormValue>;
  onSubmit: (data: SearchFormValue) => void;
}

export function SearchForm({
  handleSubmit,
  watch,
  setValue,
  onSubmit,
}: SearchFormProps) {
  const [range, setRange] = useState<Mileage[]>([
    DEFAULT_VALUE.minMileage,
    DEFAULT_VALUE.maxMileage,
  ]);

  const carTypesClick = (carType: CarType) => {
    const value: CarType[] = watch("carTypes");
    const isChecked: boolean = value?.includes(carType);
    if (isChecked)
      setValue(
        "carTypes",
        value.filter((item: CarType) => item !== carType)
      );
    else setValue("carTypes", [...(value || []), carType]);
  };

  const modelsClick = (model: Model) => {
    const value: Model[] = watch("models");
    const isChecked: boolean = value?.includes(model);
    if (isChecked)
      setValue(
        "models",
        value.filter((item: Model) => item !== model)
      );
    else setValue("models", [...(value || []), model]);
  };

  const pricesClick = (price: Price) => {
    if (watch("minPrice") === 0 && watch("maxPrice") === 0) {
      setValue("maxPrice", price);
      setValue("prices", [price]);
    } else if (watch("maxPrice") !== 0 && watch("minPrice") === 0) {
      if (watch("maxPrice") < price) {
        setValue("minPrice", watch("maxPrice"));
        setValue("maxPrice", price);
      } else if (watch("maxPrice") > price) {
        setValue("minPrice", price);
      } else {
        setValue("maxPrice", 0);
      }
      const newValue = PRICES.filter(
        (num) => watch("minPrice") <= num && watch("maxPrice") >= num
      );
      setValue("prices", newValue);
    } else {
      setValue("prices", [price]);
      setValue("minPrice", 0);
      setValue("maxPrice", price);
    }
  };

  const handleChange = (newValue: Mileage[]) => {
    setRange(newValue as Mileage[]);
    setValue("minMileage", newValue[0]);
    setValue("maxMileage", newValue[1]);
  };

  const selectModelYear = (
    event: React.ChangeEvent<HTMLSelectElement>,
    type: "min" | "max"
  ) => {
    if (type === "min")
      setValue("minModelYear", Number(event.target.value) as ModelYear);
    else setValue("maxModelYear", Number(event.target.value) as ModelYear);
  };

  const fuelsClick = (fuel: Fuel) => {
    const value: Fuel[] = watch("fuels");
    const isChecked: boolean = value?.includes(fuel);
    if (isChecked)
      setValue(
        "fuels",
        value.filter((item: Fuel) => item !== fuel)
      );
    else setValue("fuels", [...(value || []), fuel]);
  };

  const colorsClick = (color: Color) => {
    const value: Color[] = watch("colors");
    const isChecked: boolean = value?.includes(color);
    if (isChecked)
      setValue(
        "colors",
        value.filter((item: Color) => item !== color)
      );
    else setValue("colors", [...(value || []), color]);
  };

  const carOptionsClick = (index: number) => {
    const value: number[] = watch("carOptions");
    const isChecked: boolean = value?.includes(index);
    if (isChecked)
      setValue(
        "carOptions",
        value.filter((item: number) => item !== index)
      );
    else setValue("carOptions", [...(value || []), index]);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Container>
          <S.TitleArea>
            <Text fontType="subTitle">차종</Text>
          </S.TitleArea>
          <S.RadioButtonWrap>
            {CAR_TYPES.map((carType) => {
              return (
                <RadioButton
                  key={carType}
                  text={carType}
                  isChecked={watch("carTypes")?.includes(carType)}
                  onClick={() => carTypesClick(carType)}
                />
              );
            })}
          </S.RadioButtonWrap>
          <S.TitleArea>
            <Text fontType="subTitle">모델/등급</Text>
          </S.TitleArea>
          <S.RadioButtonWrap>
            {MODELS.map((model) => {
              return (
                <RadioButton
                  key={model}
                  text={model}
                  isChecked={watch("models")?.includes(model)}
                  onClick={() => modelsClick(model)}
                />
              );
            })}
          </S.RadioButtonWrap>

          <S.TitleArea>
            <Text fontType="subTitle">가격</Text>
          </S.TitleArea>
          <S.RadioButtonWrap>
            {PRICES.map((price, i) => {
              return (
                <RadioButton
                  key={price}
                  text={
                    i === PRICES.length - 1
                      ? `${price} 만원 이상`
                      : `${price} 만원`
                  }
                  isChecked={watch("prices")?.includes(price)}
                  onClick={() => pricesClick(price)}
                />
              );
            })}
          </S.RadioButtonWrap>
          <S.TitleArea>
            <Text fontType="subTitle">주행거리</Text>
          </S.TitleArea>
          <Slider
            value={range}
            max={DEFAULT_VALUE.maxMileage}
            min={DEFAULT_VALUE.minMileage}
            step={10000}
            marks
            onChange={(_: any, value: number[] | number) => {
              if (Array.isArray(value)) {
                handleChange(value as Mileage[]);
              }
            }}
            sx={{ backGroundColor: "#fff" }}
          />
          <S.MileageStatus>
            <Text fontType="sub1">{`${watch("minMileage")} km`}</Text>
            <Text fontType="sub1">{`${watch("maxMileage")} km`}</Text>
          </S.MileageStatus>
          <S.TitleArea>
            <Text fontType="subTitle">연식</Text>
          </S.TitleArea>
          <S.ModelYearWrapper>
            <S.ModelYearSelect onChange={(e) => selectModelYear(e, "min")}>
              {MODEL_YEARS.map((modelYear) => {
                if (watch("maxModelYear") >= modelYear)
                  return (
                    <option key={modelYear} value={modelYear}>
                      {modelYear}
                    </option>
                  );
              })}
            </S.ModelYearSelect>
            ~
            <S.ModelYearSelect
              defaultValue={watch("maxModelYear")}
              onChange={(e) => selectModelYear(e, "max")}
            >
              {MODEL_YEARS.map((modelYear) => {
                if (watch("minModelYear") <= modelYear)
                  return (
                    <option key={modelYear} value={modelYear}>
                      {modelYear}
                    </option>
                  );
              })}
            </S.ModelYearSelect>
          </S.ModelYearWrapper>

          <S.TitleArea>
            <Text fontType="subTitle">연식</Text>
          </S.TitleArea>
          <S.RadioButtonWrap>
            {FUELS.map((fuel) => {
              return (
                <RadioButton
                  key={fuel}
                  text={fuel}
                  isChecked={watch("fuels")?.includes(fuel)}
                  onClick={() => fuelsClick(fuel)}
                />
              );
            })}
          </S.RadioButtonWrap>

          <S.TitleArea>
            <Text fontType="subTitle">색상 계열</Text>
          </S.TitleArea>
          <S.RadioButtonWrap>
            {COLORS.map((color, index) => {
              return (
                <ColorCheck
                  key={color}
                  index={index}
                  color={color}
                  isChecked={watch("colors")?.includes(color)}
                  onClick={() => colorsClick(color)}
                />
              );
            })}
          </S.RadioButtonWrap>

          <S.TitleArea>
            <Text fontType="subTitle">옵션</Text>
          </S.TitleArea>
          <S.RadioButtonWrap>
            {CAR_OPTIONS.map((carOption, index) => {
              return (
                <RadioButton
                  key={carOption}
                  text={carOption}
                  isChecked={watch("carOptions")?.includes(index)}
                  onClick={() => carOptionsClick(index)}
                />
              );
            })}
          </S.RadioButtonWrap>
        </S.Container>
        <div
          style={{
            maxWidth: "600px",
            position: "fixed",
            bottom: "64px",
            width: "100%",
          }}
        >
          <Button text="검색하기" size="full" />
        </div>
      </form>
    </div>
  );
}
