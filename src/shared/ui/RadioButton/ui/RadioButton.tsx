import { RadioButtonProps } from "../model/RadioButton.type";
import { StyleRadioButton } from "./RadioButton.style";
import { Text } from "../../Text";

export function RadioButton({ text, isChecked, onClick }: RadioButtonProps) {
  return (
    <StyleRadioButton $isChecked={isChecked} onClick={onClick}>
      <Text fontType="sub1" fontColor={isChecked ? "white" : "black"}>
        {text}
      </Text>
    </StyleRadioButton>
  );
}
