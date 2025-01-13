import theme from "@/shared/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0px 16px;
  display: flex;
  margin-bottom: 32px;
`;

export const InfoWrap = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const InfoCircle = styled.div`
  border-radius: 100%;
  width: 50px;
  height: 50px;
  gap: 4px;
  border: 1px solid ${theme.colors.primary2};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
