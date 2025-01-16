import { noAuthInstance } from "@/shared/api/axiosInstance";
import { ResponseBody } from "@/shared/api/type";

export interface CarDetails {
  brand: string;
  model: string;
  driveType: string;
  engineCapacity: number;
  exteriorColor: string;
  interiorColor: string;
  colorType: string;
  fuelType: string;
  licensePlate: string;
  mileage: number;
  modelYear: number;
  name: string;
  seatingCapacity: number;
  transmission: string;
  vehicleType: string;
  registrationDate: string;
}

export interface CarInfoResponse {
  id: string;
  ownerName: string;
  carDetails: CarDetails;
  mainImage: string;
}

export const handleFindCarInfo = async (
  licensePlate: string,
  ownerName: string
) => {
  try {
    const response: ResponseBody<CarInfoResponse> = await noAuthInstance.get(
      "/cars/search/base",
      {
        params: {
          licensePlate,
          ownerName,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Car info search failed:", error);
    throw error;
  }
};
