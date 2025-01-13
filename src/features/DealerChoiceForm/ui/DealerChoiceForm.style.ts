import theme from "@/shared/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 32px);
  margin: 0 auto;
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

export const CenterBox = styled.div`
  display: flex;
  padding: 16px 0;
  justify-content: center;
`;
export const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${theme.colors.black};
  text-align: center;
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSizes.subTitle};
  width: 120px;
`;
