import { Text } from "../../Text";
import { COLOR_IMAGES } from "../model/model";
import { ColorCheckProps } from "../model/type";
import * as S from "./ColorCheck.style";

export function ColorCheck({
  index,
  isChecked,
  onClick,
  color,
}: ColorCheckProps) {
  return (
    <S.Container>
      {/* Label을 통해 CheckBox 제어 */}
      <S.Label htmlFor={color}>
        <S.ColorImg $isChecked={isChecked} src={COLOR_IMAGES[index]} />
        <Text fontType="sub2" fontWeight={isChecked ? "bold" : "light"}>
          {color}
        </Text>
      </S.Label>
      <S.StyledCheckBox
        type="checkbox"
        checked={isChecked}
        onChange={onClick}
        id={color} // Label과 연결
      />
    </S.Container>
  );
}
