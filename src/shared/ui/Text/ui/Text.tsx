import { TextProps } from "../model/Text.type";
import StyledP from "./Text.style";

function Text({
  fontColor,
  fontType,
  fontWeight,
  fontSize,
  children,
}: TextProps) {
  return (
    <StyledP
      $fontColor={fontColor}
      $fontType={fontType}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
    >
      {children}
    </StyledP>
  );
}

export default Text;
