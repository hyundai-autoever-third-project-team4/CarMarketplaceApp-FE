import * as S from "./DefaultModal.style";
import { DefaultModalProps } from "../model/DefaultModal.type";
import { Text } from "../../Text";
import DynamicSVG from "../../DynamicSVG/DynamicSVG";
import closeIcon from "@shared/assets/Close.svg";
import theme from "@/shared/styles/theme";

export function DefaultModal({
  open,
  handleClose,
  title,
  children,
}: DefaultModalProps) {
  return (
    <>
      <S.Back $open={open} />
      <S.ModalContainer $open={open}>
        <S.TopArea>
          <Text fontType="title">{title}</Text>
          <DynamicSVG
            svgUrl={closeIcon}
            width={28}
            height={28}
            color={theme.colors.black}
            onClick={handleClose}
          />
        </S.TopArea>
        <S.ContentArea>{children}</S.ContentArea>
      </S.ModalContainer>
    </>
  );
}
