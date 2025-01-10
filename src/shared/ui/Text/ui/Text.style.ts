import styled, { css } from "styled-components";
import { TextProps } from "../model/Text.type";
import theme from "@/shared/styles/theme";

type StyledProps = Pick<
  TextProps,
  "fontColor" | "fontType" | "fontWeight" | "fontSize"
>;

const fontTypeStyles = {
  title: css`
    font-size: ${theme.fontSizes.title};
    font-weight: ${theme.fontWeight.bold};
  `,
  subTitle: css`
    font-size: ${theme.fontSizes.subTitle};
    font-weight: ${theme.fontWeight.medium};
  `,
  sub1: css`
    font-size: ${theme.fontSizes.sub1};
    font-weight: ${theme.fontWeight.regular};
  `,
  sub2: css`
    font-size: ${theme.fontSizes.sub2};
    font-weight: ${theme.fontWeight.demiLight};
  `,
};

const StyledP = styled.div<StyledProps>`
  ${({ fontType }) => fontType && fontTypeStyles[fontType]}

  // 여기 아래로는 커스텀임.
  font-size: ${({ fontSize }) => fontSize && `${fontSize}px`}; ///
  font-weight: ${({ fontWeight }) =>
    fontWeight && `${theme.fontWeight[fontWeight]}`};
  color: ${({ fontColor }) => fontColor && theme.colors[fontColor]};
`;

export default StyledP;
