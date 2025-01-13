import DEALER_CHOICE_CARS from "./mock";
import { DealerChoiceCar } from "../model/type";

type Nullable = DealerChoiceCar | null;
type DealerChoice = [DealerChoiceCar, Nullable, Nullable];

export const getDealerChoiceCars = async (): Promise<DealerChoice> => {
  // 실제 API 호출 대신 Promise를 사용해 mock 데이터를 반환
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DEALER_CHOICE_CARS);
    }, 2000);
  });
};
