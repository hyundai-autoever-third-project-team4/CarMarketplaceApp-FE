import styled, { css } from "styled-components";
import { ButtonProps } from "../model/Button.type";
import theme from "@/shared/styles/theme";
import { StyleProps } from "@/shared/utils/types/utilityType";

type StyledButtonProps = StyleProps<Pick<ButtonProps, "size">> & {
  $disable?: boolean;
};
const buttonTypeStyles = {
  small: css`
    padding: 4px 8px;
    border-radius: 4px;
  `,
  big: css`
    width: 100%;
    padding: 6px 0;
    height: 35px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
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
  background-color: ${({ $disable }) =>
    $disable ? theme.colors.lightGray : theme.colors.primary4};
  color: ${({ $disable }) => ($disable ? theme.colors.gray : "white")};
  border: none;
  cursor: ${({ $disable }) => ($disable ? "not-allowed" : "pointer")};
  ${({ $size }) => buttonTypeStyles[$size]}
`;
