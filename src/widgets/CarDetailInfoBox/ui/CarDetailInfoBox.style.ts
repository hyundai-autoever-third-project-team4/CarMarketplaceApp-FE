import theme from "@/shared/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0px 16px;
  margin-bottom: 46px;
`;

export const ContainerBackground = styled.div`
  width: 100%;
  height: 380px;
  display: flex;
  flex-wrap: wrap;
  background-color: ${theme.colors.lightGray};
  gap: 18px;
  padding: 26px 46px;
`;

export const CarInfoWrap = styled.div`
  width: calc(50% - 9px); /* 50%에서 간격의 절반을 뺀 값 */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 'flex'에서 'flex-start'로 수정 */
  margin-bottom: 18px; /* 아래쪽 여백 추가 */
`;

export const CarInfoArea = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
