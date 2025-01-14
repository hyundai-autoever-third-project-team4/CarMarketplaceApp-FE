import theme from "@/shared/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
`;

export const Title = styled.div`
  margin-bottom: 20px;
`;

export const MarginBottom = styled.div`
  margin: 24px 0;
  border-bottom: 2px solid ${theme.colors.lightGray};
`;
