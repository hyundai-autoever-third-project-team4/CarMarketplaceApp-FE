import { Text } from "@/shared/ui/Text";
import * as S from "./CarDetailOptionInfo.style";
import { CarOption } from "@/entities/Car";
import { OptionId } from "@/widgets/CarDetailOptionInfo/model/types";
import { OPTION_INFO } from "../model/optionData";

interface CarDetailOptionInfoProps {
  carOptions: CarOption[];
}

export function CarDetailOptionInfo({ carOptions }: CarDetailOptionInfoProps) {
  return (
    <S.Container>
      {carOptions.map((option) => {
        const optionInfo = OPTION_INFO[option.optionId as OptionId];
        return (
          <S.OptionWrap key={option.optionId} $isPresent={option.isPresent}>
            <S.OptionImg src={optionInfo.imageUrl} alt={optionInfo.text} />
            <Text fontType="sub2" fontWeight="regular">
              {optionInfo.text}
            </Text>
          </S.OptionWrap>
        );
      })}
    </S.Container>
  );
}
