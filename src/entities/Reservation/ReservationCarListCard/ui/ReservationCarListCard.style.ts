import styled from "styled-components";

export const Container = styled.div`
  height: 106px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const CarImg = styled.img`
  width: 160px;
  height: auto; /* height는 auto로 설정 */
  aspect-ratio: 160 / 106; /* 비율 설정 */
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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px 0;
`;
