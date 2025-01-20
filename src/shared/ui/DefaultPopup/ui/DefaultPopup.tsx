import * as S from "./DefaultPopup.style";
import { DefaultPopupProps } from "../model/DefaultPopup.type";
import { Text } from "../../Text";

export function DefaultPopup({
  open,
  handleClose,
  content,
  isLoginPopup,
  handleConfirmClick,
}: DefaultPopupProps) {
  return (
    <>
      <S.Back $open={open} />
      <S.PopupContainer $open={open}>
        <S.ContentArea>
          <Text fontType="sub1">{content}</Text>
        </S.ContentArea>
        {!isLoginPopup ? (
          <S.ButtonArea
            onClick={handleConfirmClick ? handleConfirmClick : handleClose}
          >
            <Text fontType="sub1">확인</Text>
          </S.ButtonArea>
        ) : (
          <S.ButtonArea>
            <S.Close onClick={handleClose}>
              <Text fontType="sub1">취소</Text>
            </S.Close>
            <S.Confirm onClick={handleConfirmClick}>
              <Text fontType="sub1">확인</Text>
            </S.Confirm>
          </S.ButtonArea>
        )}
      </S.PopupContainer>
    </>
  );
}
