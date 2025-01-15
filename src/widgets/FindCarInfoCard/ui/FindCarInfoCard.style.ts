import theme from "@/shared/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 64px;
`;

export const MainImg = styled.img`
  padding: 0 12px;
  width: 100%;
  height: auto;
  aspect-ratio: 316 / 202; /* 비율 설정 */
  margin-bottom: 12px;
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 4px;
  border-bottom: 1px solid ${theme.colors.primary};
  margin-bottom: 10px;
`;
