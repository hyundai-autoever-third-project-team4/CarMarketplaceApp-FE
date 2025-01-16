import { noAuthInstance } from "@/shared/api/axiosInstance";
import { ResponseBody } from "@/shared/api/type";

export interface CarReservationList {
  marketplaceCarId: string;
  marketplaceCarAvailability: {
    [key: string]: boolean;
  };
}

export const getCarReservationList = async (
  marketplaceCarId: string | undefined
): Promise<CarReservationList> => {
  const response: ResponseBody<Promise<CarReservationList>> =
    await noAuthInstance.get(
      `/reservations/marketplace-cars/${marketplaceCarId}`
    );
  return response.data;
};
