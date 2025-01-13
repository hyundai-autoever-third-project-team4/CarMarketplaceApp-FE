import styled, { css } from "styled-components";
import { CardType } from "../model/type";
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

export const TextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Picking1 = styled.img`
  width: 27px;
  height: 42px;
  position: absolute;
  top: -32px;
  left: calc(45% - 13.5px);
  z-index: 1;
`;
export const Picking2 = styled.img`
  width: 41px;
  height: 55px;
  position: absolute;
  top: -32px;
  left: calc(45% + 13.5px);
  z-index: 3;
`;
