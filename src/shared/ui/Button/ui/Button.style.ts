import styled, { css } from "styled-components";
import { ButtonProps } from "../model/Button.type";
import theme from "@/shared/styles/theme";
import { StyleProps } from "@/shared/utils/types/utilityType";

type StyledButtonProps = StyleProps<Pick<ButtonProps, "size">>;

const buttonTypeStyles = {
  small: css`
    padding: 4px 8px;
    border-radius: 4px;
  `,
  big: css`
    width: calc(100% - 32px);
    margin: 0 16px;
    height: 35px;
    border-radius: 4px;
    text-align: center;
    line-height: 35px;
  `,
  full: css`
    height: 48px;
    width: 100%;
    text-align: center;
    line-height: 48px;
  `,
  login: css`
    width: calc(100%);
    margin: 0 16px;
    height: 35px;
    border-radius: 4px;
    text-align: center;
    line-height: 35px;
  `,
};
export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${theme.colors.primary4};
  color: white;
  border: none;
  cursor: pointer;
  ${({ $size }) => buttonTypeStyles[$size]}
`;
