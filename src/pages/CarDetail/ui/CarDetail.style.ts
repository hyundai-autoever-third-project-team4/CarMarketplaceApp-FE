import theme from "@/shared/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Divider = styled.div`
  border-bottom: 12px solid ${theme.colors.lightGray};
  margin-bottom: 32px;
`;

export const TextLeftMargin = styled.div`
  margin-left: 16px;
  margin-bottom: 16px;
`;

export const LikeArea = styled.div`
  width: 54px;
  height: 46px;
  border: 1px solid ${theme.colors.primary2};
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LikeImg = styled.img`
  width: 25px;
  height: 25px;
`;

export const BottomArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 64px;
`;
