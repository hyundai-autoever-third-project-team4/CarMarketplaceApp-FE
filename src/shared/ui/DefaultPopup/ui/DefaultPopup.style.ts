import { DefaultPopupProps } from "../model/DefaultPopup.type";
import styled from "styled-components";
import { StyleProps } from "@/shared/utils/types/utilityType";

type ContainerProps = StyleProps<Pick<DefaultPopupProps, "open">>;

export const PopupContainer = styled.div<ContainerProps>`
  width: calc(100% - 64px);
  max-width: 536px;
  min-width: 236px;
  margin: 0 0 0 32px;
  position: fixed;
  top: calc(50% - 130px);
  height: 260px;
  background-color: #fff;
  display: ${({ $open }) => !$open && "none"};
  z-index: 11;
`;

export const Back = styled.div<ContainerProps>`
  position: fixed;
  z-index: 10;
  top: 0px;
  width: 100%;
  max-width: 600px;
  min-width: 300px;
  height: 100vh;
  background-color: black;
  display: ${({ $open }) => !$open && "none"};
  opacity: ${({ $open }) => ($open ? 0.2 : 0)};
`;

export const ContentArea = styled.div`
  height: 203px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const ButtonArea = styled.div`
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

export const Close = styled.div`
  width: 50%;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Confirm = styled.div`
  width: 50%;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* border-left: 1px solid ${({ theme }) => theme.colors.lightGray}; */

  &::before {
    content: "";
    position: absolute;
    top: 3px; /* 위에서 3px 내려감 */
    bottom: 3px; /* 아래에서 3px 올라감 */
    left: 0;
    width: 1px;
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;
