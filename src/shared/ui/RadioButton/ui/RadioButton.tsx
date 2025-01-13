import { RadioButtonProps } from "../model/RadioButton.type";
import * as S from "./RadioButton.style";

export function RadioButton({ text, isChecked, onClick }: RadioButtonProps) {
  return (
    <S.StyledRadioButtonWrapper>
      <S.StyledRadioButton
        type="checkbox"
        checked={isChecked}
        onChange={onClick}
        id={text}
      />
      <S.StyledRadioLabel htmlFor={text} $isChecked={isChecked}>
        {text}
      </S.StyledRadioLabel>
    </S.StyledRadioButtonWrapper>
  );
}
