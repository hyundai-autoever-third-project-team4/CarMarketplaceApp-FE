import { RadioButtonProps } from "../model/RadioButton.type";
import { StyleRadioButton } from "./RadioButton.style";
import { Text } from "../../Text";

export function RadioButton({ text, isChecked }: RadioButtonProps) {
  return (
    <StyleRadioButton $isChecked={isChecked}>
      <Text fontType="sub1" fontColor={isChecked ? "white" : "black"}>
        {text}
      </Text>
    </StyleRadioButton>
  );
}
