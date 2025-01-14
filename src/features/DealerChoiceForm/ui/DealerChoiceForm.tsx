import * as S from "./DealerChoiceForm.style";
import { Text } from "@/shared/ui/Text";
import { RadioButton } from "@/shared/ui/RadioButton";
import { useForm } from "react-hook-form";
import { Button } from "@/shared/ui/Button";
import { FormValues, FormProps } from "../model/type";
import { CAR_TYPES } from "../model/model";
import { CarType } from "../model/type";

export function DealerChoiceForm({ onClick }: FormProps) {
  const { handleSubmit, watch, setValue, register } = useForm<FormValues>({
    defaultValues: {
      budget: null,
      carTypes: [],
    },
  });

  const onSubmit = (data: FormValues) => {
    onClick(data);
  };

  const handleRadioButtonClick = (carType: CarType) => {
    const value: CarType[] = watch("carTypes");
    const isChecked: boolean = value?.includes(carType);
    if (isChecked)
      setValue(
        "carTypes",
        value.filter((item: CarType) => item !== carType)
      );
    else setValue("carTypes", [...(value || []), carType]);
  };

  return (
    <S.Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.FlexBox>
          <Text fontType="subTitle">예산</Text>
          <S.StyledInput
            type="number"
            placeholder="3000"
            min={0}
            max={9999}
            onInput={(e: any) => {
              if (e.target.value < 0) e.target.value = 0;
              if (e.target.value > 9999) e.target.value = 9999;
            }}
            {...register("budget")}
          />
          <Text fontType="sub2"> 만원</Text>
        </S.FlexBox>
        <S.FlexBox>
          <Text fontType="subTitle">차종</Text>
          {CAR_TYPES.map((carType) => (
            <RadioButton
              key={carType}
              text={carType}
              isChecked={watch("carTypes")?.includes(carType)}
              onClick={() => handleRadioButtonClick(carType)}
            />
          ))}
        </S.FlexBox>
        <S.CenterBox>
          <Button text="차량 추천 받기" size="small" />
        </S.CenterBox>
      </form>
    </S.Container>
  );
}
