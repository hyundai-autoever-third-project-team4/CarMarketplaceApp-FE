import theme from "@/shared/styles/theme";
import styled, { keyframes } from "styled-components";

const Loading = keyframes`
  0% {
    transform: translateY(0) ;
    }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0) ;
  }
`;

const DotLoading = keyframes`
  0% {
    transform: translateY(0) ;
    }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0) ;
  }
`;

export const LoadingContainer = styled.div<{ $middle?: boolean }>`
  // $middle 프로퍼티 추가
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: column;
  margin-top: ${({ $middle }) =>
    $middle ? "100px" : "0"}; // 조건부 margin-top
`;

export const LoadingImg = styled.img`
  width: 120px;
  height: 120px;
  animation: ${Loading} 2s ease-in-out infinite;
`;

export const LoadingDots = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80px;
`;

export const Dot = styled.div<{ delay: string }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${theme.colors.gray};
  animation: ${DotLoading} 2s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}; /* 각 점에 다른 delay 적용 */
`;
