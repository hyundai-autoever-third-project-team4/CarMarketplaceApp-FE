import theme from "@/shared/styles/theme";
import styled from "styled-components";
import { Swiper } from "swiper/react";

export const Container = styled.div`
  width: 100%;
  padding: 0px 16px;
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 200px; /* 슬라이드 높이 설정 */
  margin-bottom: 8px;

  .swiper-slide {
    background: ${theme.colors.lightGray};
    display: flex;
    flex-direction: column;
    padding: 16px;
    align-items: center;
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background: ${theme.colors.primary2};
    opacity: 0.5;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    background: ${theme.colors.primary2};
    transform: scale(1.2);
  }
`;

export const TextArea = styled.div`
  display: flex;
`;

export const TextWrap = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2px;
`;

export const TextLeftArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
`;

export const ContentsText = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5; /* 최대 5줄 표시 */
  overflow: hidden; /* 넘치는 부분 숨기기 */
  text-overflow: ellipsis; /* ...으로 표시 */
`;

export const ImgRightArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 45%;
  padding: 8px;
`;

export const CarImg = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 110/82;
`;

export const NoText = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
