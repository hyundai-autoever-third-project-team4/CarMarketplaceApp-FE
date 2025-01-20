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
`;

export const Message = styled.div`
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #e9ecef;
  border-radius: 10px;
  word-wrap: break-word;
`;

export const InputContainer = styled.div`
  display: flex;
  padding: 1rem;
  border-top: 1px solid #dee2e6;
  background-color: #f8f9fa;
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 1rem;
`;

export const SendButton = styled.button`
  margin-left: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
