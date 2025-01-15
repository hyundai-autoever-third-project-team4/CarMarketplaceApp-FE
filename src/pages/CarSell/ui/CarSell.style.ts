import theme from "@/shared/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleWrap = styled.div`
  padding: 16px 16px 20px;
`;

export const TextWrap = styled.div`
  width: 100%;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const TextLeftWrap = styled.div`
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CircleNumber = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background-color: ${theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 146px;
  height: 40px;
  text-align: center;
  border-radius: 4px;
  border: 1px solid ${theme.colors.primary};
  font-size: 18px;
  &::placeholder {
    font-size: 18px;
    color: ${theme.colors.gray};
  }
`;

export const ButtonWrap = styled.div`
  width: 100%;
  padding: 0 16px;
`;

export const SellButtonWrap = styled.div`
  position: fixed;
  bottom: 64px;
  width: 100%;
  max-width: 600px;
`;
