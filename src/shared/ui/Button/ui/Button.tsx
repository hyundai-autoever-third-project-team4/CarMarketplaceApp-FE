import { ButtonProps } from "../model/Button.type";
import * as S from "./Button.style";
import { Text } from "../../Text";

export function Button({ text, size, buttonClick }: ButtonProps) {
  const handleClick = () => {
    buttonClick();
  };
  return (
    <S.StyledButton $size={size} onClick={handleClick}>
      <Text fontColor="white" fontType={size === "small" ? "sub1" : "subTitle"}>
        {text}
      </Text>
    </S.StyledButton>
  );
}
