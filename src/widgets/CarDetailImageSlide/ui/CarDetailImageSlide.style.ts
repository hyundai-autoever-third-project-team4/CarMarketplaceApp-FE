import theme from "@/shared/styles/theme";
import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 400px; /* 슬라이드 높이 설정 */

  .swiper-button-next,
  .swiper-button-prev {
    color: ${theme.colors.primary2}; /* 화살표 색상 변경 */
    width: 40px; /* 화살표 크기 조정 */
    height: 40px; /* 화살표 크기 조정 */
    z-index: 10; /* 화살표가 슬라이드 위에 보이도록 설정 */
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 20px; /* 화살표 아이콘 크기 조정 */
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
