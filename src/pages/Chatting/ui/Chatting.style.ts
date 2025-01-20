import theme from "@/shared/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0px;
  z-index: 11;
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
`;

export const ChatBox = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Message = styled.div<{ $isAdmin: boolean }>`
  margin-bottom: 4px;
  align-self: ${({ $isAdmin }) => ($isAdmin ? "flex-start" : "flex-end")};

  padding: 0.5rem 1rem;
  background-color: ${({ $isAdmin }) =>
    $isAdmin ? theme.colors.lightGray : theme.colors.primary4};
  border-radius: 10px;
  word-wrap: break-word;

  color: ${({ $isAdmin }) =>
    $isAdmin ? `${theme.colors.black}` : theme.colors.white};
  max-width: 50%;

  position: relative;
`;
export const InputContainer = styled.div`
  display: flex;
  padding: 1rem;
  /* border-top: 1px solid #dee2e6; */
  background-color: ${theme.colors.primary4};
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 1rem;
`;

export const SendButton = styled.button<{ $isDisable?: boolean }>`
  margin-left: 0.5rem;
  padding: 0.5rem 0.5rem;
  background-color: white;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 1rem;
  opacity: ${({ $isDisable }) => ($isDisable ? `0.3` : "1")};
  cursor: pointer;
`;
