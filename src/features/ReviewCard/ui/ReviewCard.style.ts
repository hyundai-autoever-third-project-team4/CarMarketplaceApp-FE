import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 156px;
  position: relative;
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CloseImg = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const RatingWrap = styled.div`
  padding: 4px;
`;

export const ContentWrap = styled.div`
  display: -webkit-box; /* Flexbox 사용 */
  -webkit-box-orient: vertical; /* 세로 방향으로 정렬 */
  -webkit-line-clamp: 5; /* 5줄로 제한 */
  overflow: hidden; /* 넘치는 내용 숨기기 */
  text-overflow: ellipsis; /* "..." 표시 */
  line-height: 1.5; /* 줄간격 설정 (필요에 따라 조정) */
  max-height: 7.5em; /* 5줄 높이에 맞춰 설정 (1.5em * 5줄) */
  width: 50%;
`;

export const CarImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 154px;
  height: 116px;
`;

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 12;
`;
