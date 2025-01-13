import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { getPopularCars, PopularCarCard, PopularCar } from "@/entities/Car";
import * as S from "./PopularCarSlide.style";

export function PopularCarSlide() {
  const {
    data: cars,
    isLoading,
    isError,
  } = useQuery<PopularCar[]>({
    queryKey: ["popularCars"],
    queryFn: getPopularCars,
  });

  if (isLoading) {
    return <S.Container>Loading...</S.Container>;
  }

  if (isError || !cars) {
    return <S.Container>Error loading popular cars.</S.Container>;
  }

  return (
    <>
      <S.Container>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true} // 무한 스크롤
          autoplay={{
            delay: 3000,
            disableOnInteraction: false, // 사용자 상호작용 후에도 자동 재생 유지
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {cars.map((car: PopularCar, index: number) => {
            return (
              <SwiperSlide key={car.id}>
                <PopularCarCard
                  mainImage={car.mainImage}
                  name={car.name}
                  like={car.like}
                  index={index + 1}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </S.Container>
    </>
  );
}
