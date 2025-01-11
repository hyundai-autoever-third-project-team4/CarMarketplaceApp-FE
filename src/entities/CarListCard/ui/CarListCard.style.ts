import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;
  gap: 4px;
`;

export const CarImg = styled.img`
  height: auto; /* 자동으로 높이를 조정 */
  aspect-ratio: 380 / 254; /* 비율을 380:254로 설정 */
  width: 100%;
  margin-bottom: 12px;
`;

export const MiddleWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LikeWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const LikeImg = styled.img`
  width: 16px;
  height: 16px;
`;
