import theme from "@/shared/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  padding: 64px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  z-index: 13;
`;

export const TitleArea = styled.div`
  padding: 0 16px 10px 16px;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  width: 100%;
  gap: 24px;
`;

export const StyledInput = styled.input`
  border: 1px solid ${theme.colors.gray};
  padding: 12px;
  &::placeholder {
    font-size: 16px;
    color: ${theme.colors.gray};
  }
`;

export const ButtonArea = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 600px;
`;
