import theme from "@/shared/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.lightGray};
`;

export const NotLogin = styled.div`
  width: 100%;
  height: calc(100vh - 128px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const LoginedContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const MyPageTopSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 18px;
  background-color: ${theme.colors.lightGray};
`;

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const SubText = styled.p`
  color: ${theme.colors.gray};
`;

export const MyPageBottomSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const ButtonWrap = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${theme.colors.lightGray};
  gap: 14px;
  cursor: pointer;
`;

export const IconImg = styled.img`
  width: 24px;
  height: 24px;
`;
