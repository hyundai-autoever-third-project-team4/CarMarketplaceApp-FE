import styled from "styled-components";

export const Container = styled.div`
  height: calc(100% - 36px);
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const NullContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CarImg = styled.img`
  height: 100%;
  width: 160px;
`;

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const IconImg = styled.img`
  width: 18px;
  height: 18px;
`;

export const TextArea = styled.div`
  height: 100%;
  width: calc(100% - 150px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4px 0;
`;
