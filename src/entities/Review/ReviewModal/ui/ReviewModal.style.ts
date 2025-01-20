import theme from "@/shared/styles/theme";
import styled from "styled-components";
import { Swiper } from "swiper/react";

export const Container = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

export const UserTextArea = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 16px;
`;
export const CarNameArea = styled.div`
  width: 100%;
  display: flex;
  margin: 16px 0;
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 200px; /* 슬라이드 높이 설정 */
  margin-bottom: 8px;

  .swiper-slide {
    background: ${theme.colors.lightGray};
    display: flex;
    flex-direction: column;
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
