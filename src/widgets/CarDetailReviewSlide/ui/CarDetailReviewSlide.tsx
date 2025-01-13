import * as S from "./CarDetailReviewSlide.style";
import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export function CarDetailReviewSlide() {
  return (
    <S.Container>
      <S.StyledSwiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </S.StyledSwiper>
    </S.Container>
  );
}
