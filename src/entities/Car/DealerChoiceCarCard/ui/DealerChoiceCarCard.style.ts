import styled, { css, keyframes } from "styled-components";
import { CardType } from "../model/type";
import theme from "@/shared/styles/theme";

const opacityAnimation = keyframes`
0% {
  opacity: 0.5;
  }
50% {
  opacity: 0;
}
100% {
  opacity: 0.5;
}
`;

const opacityAnimation2 = keyframes`
0% {
  opacity: 1;
  }
50% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const opacityAnimation3 = keyframes`
0% {
  opacity: 0;
  }
50% {
  opacity: 1;
}
100% {
  opacity: 0;
}
`;

const opacityAnimation4 = keyframes`
0% {
  opacity: 0;
  }
50% {
  opacity: 0.5;
}
100% {
  opacity: 0;
}
`;

const containerTypes = {
  main: css`
    padding: 8px 4px;
  `,
  less: css`
    background-color: #cfcfed;
  `,
  more: css`
    background-color: #f0cece;
  `,
};

export const Container = styled.div<{ $cardType: CardType }>`
  width: 100%;
  padding: 16px 4px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  ${({ $cardType }) => containerTypes[$cardType]};
`;

export const CarImg = styled.img`
  width: calc(100% - 24px);
  position: relative;
  z-index: 2;
  aspect-ratio: 140 / 92;
  margin: 0 auto;
`;

export const CarBack = styled.div`
  width: calc(100% - 32px);
  aspect-ratio: 140 / 92;
  position: absolute;
  z-index: 3;
  top: 16px;
  left: 16px;
  background-color: ${theme.colors.black};

  animation: ${opacityAnimation} 2s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarBack2 = styled.div`
  width: calc(100% - 32px);
  aspect-ratio: 140 / 92;
  position: absolute;
  z-index: 3;
  top: 16px;
  left: 16px;
  background-color: ${theme.colors.black};

  animation: ${opacityAnimation4} 2s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MorePick = styled.img`
  width: 50%;
  aspect-ratio: 1 / 1;
  position: absolute;
  z-index: 3;
  top: 8%;
  left: 25%;
  animation: ${opacityAnimation2} 2s ease-in-out infinite;
`;

export const LessPick = styled.img`
  width: 50%;
  aspect-ratio: 1 / 1;
  position: absolute;
  z-index: 3;
  top: 8%;
  left: 25%;
  animation: ${opacityAnimation3} 2s ease-in-out infinite;
`;

export const TextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Picking1 = styled.img`
  width: 54px;
  height: 84px;
  position: absolute;
  top: -62px;
  left: calc(42% - 27px);
  z-index: 1;
`;
export const Picking2 = styled.img`
  width: 82px;
  height: 110px;
  position: absolute;
  top: -62px;
  left: calc(42% + 27px);
  z-index: 3;
`;
