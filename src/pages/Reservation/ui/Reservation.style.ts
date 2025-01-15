import theme from "@/shared/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  background-color: ${theme.colors.lightGray};
`;

export const FormContainer = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  padding: 16px 12px;
`;

export const StyledSelect = styled.select`
  width: 120px;
  height: 28px;
  padding: 0 4px;
  font-size: ${theme.fontSizes.sub2};
`;
