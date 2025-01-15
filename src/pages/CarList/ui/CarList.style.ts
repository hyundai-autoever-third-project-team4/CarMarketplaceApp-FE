import theme from "@/shared/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px 0;
`;

export const Header = styled.div`
  width: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const SVGbox = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;
`;

export const StyledSelect = styled.select`
  width: 100px;
  height: 24px;
  padding: 0 4px;
  font-size: ${theme.fontSizes.sub2};
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: calc(100vh - 228px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
