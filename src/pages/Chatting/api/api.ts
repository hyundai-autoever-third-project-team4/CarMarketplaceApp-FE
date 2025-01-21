import { authInstance } from "@/shared/api/axiosInstance";
import { ResponseBody } from "@/shared/api/type";
import { Response } from "../model/type";

export const getChatHistories = async (): Promise<Response> => {
  const resposnse: ResponseBody<Promise<Response>> = await authInstance.get(
    "/chat/histories"
  );
  return resposnse.data;
};
