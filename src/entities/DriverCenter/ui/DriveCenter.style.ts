import theme from "@/shared/styles/theme";
import styled from "styled-components";

export const Container = styled.div<{ $isChecked: boolean }>`
  height: 84px;
  width: 100%;
  padding: 12px 0 16px 0;
  border-top: 1px solid ${theme.colors.lightGray};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${({ $isChecked }) => $isChecked && theme.colors.lightGray};
`;
