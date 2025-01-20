import { authInstance } from "@/shared/api/axiosInstance";

export const writeReview = async (data: any) => {
  return await authInstance.post("/review", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
