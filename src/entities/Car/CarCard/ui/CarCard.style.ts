import styled from "styled-components";

export const Container = styled.div`
  height: 108px;
  width: calc(100% - 32px);
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const CarImg = styled.img`
  height: 100%;
  width: 160px;
`;

export const TextArea = styled.div`
  height: 100%;
  width: calc(100% - 176px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4px 0;
`;
