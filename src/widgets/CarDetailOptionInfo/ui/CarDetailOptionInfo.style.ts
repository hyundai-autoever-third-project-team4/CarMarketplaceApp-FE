import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  padding: 0px 32px;
  row-gap: 22px;
  column-gap: 10px;
  margin-bottom: 54px;
`;

type OptionWrapProps = { $isPresent: boolean };
export const OptionWrap = styled.div<OptionWrapProps>`
  opacity: ${({ $isPresent }) => ($isPresent ? 1 : 0.2)};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-align: center;
  width: 100%;
  white-space: pre-line;
`;

export const OptionImg = styled.img`
  width: 50px;
  height: 50px;
`;
