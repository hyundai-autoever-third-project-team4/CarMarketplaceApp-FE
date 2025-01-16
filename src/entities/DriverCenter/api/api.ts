import { noAuthInstance } from "@/shared/api/axiosInstance";
import { ResponseBody } from "@/shared/api/type";

export const getDriveCenterCars = async (
  testDriveCenterId: number
): Promise<any> => {
  const response: ResponseBody<Promise<any>> = await noAuthInstance.get(
    `/test-driver-centers/${testDriveCenterId}`
  );

  return response.data;
};
