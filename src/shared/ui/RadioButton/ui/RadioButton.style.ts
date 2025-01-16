import styled, { css } from "styled-components";
import { StyleProps } from "@/shared/utils/types/utilityType";
import { RadioButtonProps } from "../model/RadioButton.type";
import theme from "@/shared/styles/theme";

// RadioButtonProps에서 필요한 속성만 Pick
type StyledLabelProps = StyleProps<Pick<RadioButtonProps, "isChecked">>;

// 체크박스 숨기기 (스타일 커스텀을 위해)
export const StyledRadioButton = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

// 라벨 스타일
export const StyledRadioLabel = styled.label<StyledLabelProps>`
  padding: 6px 16px;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  display: inline-block;
  font-size: ${theme.fontSizes.sub1};
  font-weight: ${theme.fontWeight.regular};
  transition: 0.2s;
  ${({ $isChecked, theme }) =>
    $isChecked
      ? css`
          background-color: ${theme.colors.primary4};
          color: white;
        `
      : css`
          box-shadow: 0 0 0 1px #000 inset;
          background-color: #fff;
          color: black;
        `}
`;

// 라벨과 체크박스 래퍼
export const StyledRadioButtonWrapper = styled.div`
  display: inline-block;
  position: relative;
`;
