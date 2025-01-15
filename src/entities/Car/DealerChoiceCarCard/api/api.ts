import { DealerChoiceCar } from "../model/type";
import { noAuthInstance } from "@/shared/api/axiosInstance";
import { ResponseBody } from "@/shared/api/type";

type Nullable = DealerChoiceCar | null;
type DealerChoice = {
  recommandResults: [DealerChoiceCar, Nullable, Nullable];
};
export const getDealerChoiceCars = async (
  requestBody: any
): Promise<DealerChoice> => {
  const response: ResponseBody<Promise<DealerChoice>> =
    await noAuthInstance.post(`/car/recommend`, requestBody);

  return response.data;
};
