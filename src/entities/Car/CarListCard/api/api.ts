import { noAuthInstance } from "@/shared/api/axiosInstance";
import { CarListCardProps } from "../model/type";

export const getCarListCars = async (
  params: any
): Promise<CarListCardProps[]> => {
  return await noAuthInstance.get("/cars/search", {
    params,
  });
};
