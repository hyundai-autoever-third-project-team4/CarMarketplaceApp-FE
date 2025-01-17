import * as S from "./CarDetailImageSlide.style";
import { SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export interface CarImage {
  id: number;
  marketplaceCarId: string;
  imageUrl: string;
}

export interface CarDetailImageSlideProps {
  carImages: CarImage[];
  mainImg: string;
}

export function CarDetailImageSlide({
  carImages,
  mainImg,
}: CarDetailImageSlideProps) {
  return (
    <>
      <S.StyledSwiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
          <img src={mainImg} alt={"main image"} />
        </SwiperSlide>
        {carImages.map((carImage) => (
          <SwiperSlide key={carImage.id}>
            <img src={carImage.imageUrl} alt={`Car image ${carImage.id}`} />
          </SwiperSlide>
        ))}
      </S.StyledSwiper>
    </>
  );
}
