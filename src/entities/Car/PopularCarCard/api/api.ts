import { PopularCar } from "../model/type";
import { noAuthInstance } from "@/shared/api/axiosInstance";
import { ResponseBody } from "@/shared/api/type";

export const getPopularCars = async (): Promise<PopularCar[]> => {
  const result: ResponseBody<Promise<PopularCar[]>> = await noAuthInstance.get(
    "/cars/top-liked"
  );

  return result.data;
};
