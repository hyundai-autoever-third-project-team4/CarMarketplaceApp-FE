import { RadioButtonProps } from "../model/RadioButton.type";
import { StyleProps } from "@/shared/utils/types/utilityType";
import styled, { css } from "styled-components";

type StyleRadioButtonProps = StyleProps<Pick<RadioButtonProps, "isChecked">>;

const RadioButtonTypes = {
  true: css`
    background-color: ${({ theme }) => theme.colors.primary4};
    color: white;
  `,
  false: css`
    box-shadow: 0 0 0 1px #000 inset;
    background-color: #fff;
  `,
};

export const StyleRadioButton = styled.button<StyleRadioButtonProps>`
  padding: 4px 16px;
  border: none;
  border-radius: 100px;
  cursor: pointer;

  ${({ $isChecked }) =>
    $isChecked ? RadioButtonTypes["true"] : RadioButtonTypes["false"]}
`;
