import theme from "@/shared/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
`;

export const Divider = styled.div`
  border-bottom: 12px solid ${theme.colors.lightGray};
  margin-bottom: 32px;
`;

export const TextLeftMargin = styled.div`
  margin-left: 16px;
  margin-bottom: 16px;
`;

export const BottomArea = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 64px;
  z-index: 5;
`;

export const LikeArea = styled.div`
  width: 54px;
  height: 48px;
  border: 2px solid ${theme.colors.primary2};
  box-sizing: border-box;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonArea = styled.div`
  width: 100%;
`;

export const LikeImg = styled.img`
  width: 25px;
  height: 25px;
`;
