import theme from "@/shared/styles/theme";
import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 274px; /* 슬라이드 높이 설정 */
  margin-bottom: 8px;

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

  .swiper-pagination {
    background-color: rgba(0, 0, 0, 0.4); /* 회색 배경 및 알파값 설정 */
    border-radius: 4px; /* 네모난 모서리 설정 */
    width: 60px; /* 고정 너비 설정 */
    height: 20px; /* 고정 높이 설정 */
    position: absolute; /* 절대 위치 설정 */
    left: 50%; /* 왼쪽 50%로 이동 */
    transform: translateX(-50%); /* 수평 중앙 정렬 */
    bottom: 10px; /* 페이지네이션 위치 조정 */
    line-height: 20px;
    color: white;
    font-weight: lighter;
  }

  .swiper-pagination span {
    color: white; /* 페이지 번호 색상 흰색으로 설정 */
  }
`;
