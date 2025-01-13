import DEALER_CHOICE_CARS from "./mock";
import { DealerChoiceCar } from "../model/type";

export const getDealerChoiceCars = async (): Promise<DealerChoiceCar[]> => {
  // 실제 API 호출 대신 Promise를 사용해 mock 데이터를 반환
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DEALER_CHOICE_CARS);
    }, 2000);
  });
};
