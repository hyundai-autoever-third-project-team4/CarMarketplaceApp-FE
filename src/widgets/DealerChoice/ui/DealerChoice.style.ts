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

export const Container = styled.div`
  width: 100%;
  padding: 0 16px;
  line-height: 120%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DealerChoiceContainer = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  text-align: center;
  line-height: 110%;
  background-color: ${theme.colors.lightGray};
`;
4;

export const DealerChoiceData = styled.div`
  width: 100%;
  min-height: 368px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  /* background-color: #fff; */
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: column;
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

export const MainCar = styled.div`
  width: 60%;
  margin: 16px auto;
`;

export const SideCar = styled.div`
  width: calc(50% - 8px);
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

export const SideCars = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
`;
