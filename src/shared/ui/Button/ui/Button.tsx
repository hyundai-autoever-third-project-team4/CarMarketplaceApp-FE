import { ButtonProps } from "../model/Button.type";
import * as S from "./Button.style";
import { Text } from "../../Text";

export function Button({ text, size, buttonClick }: ButtonProps) {
  return (
    // handleClick 이 넘어오지 않았을 때 가드 코드
    <S.StyledButton $size={size} onClick={buttonClick || (() => {})}>
      <Text fontColor="white" fontType={size === "small" ? "sub1" : "subTitle"}>
        {text}
      </Text>
    </S.StyledButton>
  );
}
