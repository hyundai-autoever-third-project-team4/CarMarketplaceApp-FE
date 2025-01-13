import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

export const NotLogin = styled.div`
  width: 100%;
  height: 100%;
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
