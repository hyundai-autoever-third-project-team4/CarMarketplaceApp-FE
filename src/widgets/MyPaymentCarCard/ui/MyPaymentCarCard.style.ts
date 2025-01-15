import theme from "@/shared/styles/theme";
import styled from "styled-components";

// Props 타입 정의
interface StatusBoxProps {
  $isComplete: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const StatusBox = styled.div<StatusBoxProps>`
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
