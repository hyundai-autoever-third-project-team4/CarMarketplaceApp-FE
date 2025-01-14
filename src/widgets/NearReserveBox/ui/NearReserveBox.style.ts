import theme from "@/shared/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 150px;
  background-color: ${theme.colors.white};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 12px;
`;

export const ReserveImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
