import { noAuthInstance } from "@/shared/api/axiosInstance";
import { CarListCardProps } from "../model/type";
import { ResponseBody } from "@/shared/api/type";

export const getCarListCars = async (
  params: any
): Promise<CarListCardProps[]> => {
  const response: ResponseBody<Promise<CarListCardProps[]>> =
    await noAuthInstance.get("/cars/search", {
      params,
    });
  return response.data;
};
