import { useQuery } from "@tanstack/react-query";
import { Response, Message } from "./type";
import { useState } from "react";
import { getChatHistories } from "../api/api";

export const useChatting = () => {
  const userId = localStorage.getItem("userId");
  const {
    data: histories,
    isLoading,
    isError,
  } = useQuery<Response>({
    queryKey: ["Chatting", userId],
    queryFn: getChatHistories,
    gcTime: 0,
  });
  const [messages, setMessages] = useState<Message[]>([]);

  return {
    histories,
    userId,
    messages,
    isLoading,
    isError,
    setMessages,
  };
};
