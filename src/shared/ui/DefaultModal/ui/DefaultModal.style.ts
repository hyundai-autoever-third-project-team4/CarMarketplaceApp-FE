import styled from "styled-components";
import { DefaultModalProps } from "../model/DefaultModal.type";
import { StyleProps } from "@/shared/utils/types/utilityType";

type ModalContainerProps = StyleProps<Pick<DefaultModalProps, "open">>;

export const ModalContainer = styled.div<ModalContainerProps>`
  width: 100%;
  max-width: 600px;
  min-width: 300px;
  height: calc(100vh);
  position: fixed;
  background-color: white;
  z-index: 11;
  top: 0px;
  left: 0px;

  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transform: ${({ $open }) => ($open ? "translateY(0%)" : "translateY(80%)")};
  transition: all 0.4s ease-out;
`;

export const Back = styled.div<ModalContainerProps>`
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

export const TopArea = styled.div`
  padding: 0 16px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentArea = styled.div`
  padding: 0 16px;
  height: calc(100vh - 128px);
  overflow-y: auto;

  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 엣지 */
  }

  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */
`;
