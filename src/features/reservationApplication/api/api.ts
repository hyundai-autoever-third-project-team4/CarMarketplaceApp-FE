import { authInstance } from "@/shared/api/axiosInstance";

interface value {
  marketplaceCarId: string;
  reservationDate: string;
  reservationTime: string;
}

export const writeReservaiton = async (data: value) => {
  const response = await authInstance.post(`/reservation`, data);

  return response.data;
};
