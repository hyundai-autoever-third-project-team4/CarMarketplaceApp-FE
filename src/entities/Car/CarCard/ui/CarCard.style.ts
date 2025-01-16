import theme from "@/shared/styles/theme";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Container = styled.div`
  height: 100px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const CarImg = styled.img`
  height: 100%;
  width: 148px;
  object-fit: cover;
`;

export const TextArea = styled.div`
  height: 100%;
  width: calc(100% - 176px);
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  gap: 8px 0;
  padding: 4px 0;
`;

export const StatusBox = styled.div<{ $isComplete: boolean }>`
  border-radius: 4px;
  position: absolute;
  text-align: center;
  line-height: 16px;
  top: 6px;
  left: 6px;
  width: 44px;
  height: 16px;
  background-color: ${({ $isComplete }) =>
    $isComplete ? theme.colors.primary : theme.colors.gray};
  color: white;
  font-size: 8px;
  font-weight: 400;
`;
