import POPULAR_CARS from "./mock";
import { PopularCar } from "../../type";

export const getPopularCars = async (): Promise<PopularCar[]> => {
  // 실제 API 호출 대신 Promise를 사용해 mock 데이터를 반환
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(POPULAR_CARS);
    }, 200); // 500ms 딜레이 추가
  });
};
