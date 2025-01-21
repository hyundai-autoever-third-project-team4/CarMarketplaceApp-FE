import { useEffect, useMemo, useRef, useState } from "react";
import * as S from "./Chatting.style";
import sendSvg from "@shared/assets/send.svg";
import admin from "@shared/assets/isAdmin.svg";
import { useChatting } from "../model/useChatting";
import { Text } from "@/shared/ui/Text";
import { CustomLoading } from "@/shared/ui/CustomLoading";

// WebSocket 서버 URL
const SOCKET_URL = "https://chajava.store/api/ws/chat";
const ADMIN_ID = 1;

const formatTime = (utcTime: Date) => {
  const date = new Date(utcTime);
  const koreanDate = new Date(date.getTime() + 9 * 60 * 60 * 1000);
  const hours = koreanDate.getHours().toString().padStart(2, "0");
  const minutes = koreanDate.getMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
};

export function Chatting() {
  const [client, setClient] = useState<any>(null);
  const { histories, userId, messages, isLoading, isError, setMessages } =
    useChatting();
  const [inputValue, setInputValue] = useState("");
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const readHereRef = useRef<HTMLDivElement>(null);

  const isFirst = useMemo(() => {
    if (histories) return histories.chatHistoryDtos.length === 0;
    else true;
  }, [histories]);

  useEffect(() => {
    // WebSocket 연결 설정
    const socket = new (window as any).SockJS(SOCKET_URL);
    const stompClient = (window as any).Stomp.over(socket);

    stompClient.connect({}, () => {
      stompClient.subscribe(`/queue/user-${userId}`, (message: any) => {
        const parsedMessage = JSON.parse(message.body);
        parsedMessage["createdAt"] = new Date(
          new Date().getTime() - 9 * 60 * 60 * 1000
        );
        setMessages((prev) => [...prev, parsedMessage]);
      }),
        (error: any) => {
          console.error("WebSocket 연결 실패:", error);
        };
    });

    setClient(stompClient);

    // Cleanup: 연결 종료
    return () => {
      if (stompClient.connected) {
        stompClient.disconnect(() => {
          console.log("Disconnected from WebSocket");
        });
      }
    };
  }, []);

  useEffect(() => {
    // 채팅창 스크롤을 가장 아래로 이동
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (readHereRef.current) {
      readHereRef.current.scrollIntoView();
    }
  }, [histories]);

  const sendMessage = () => {
    if (inputValue !== "") {
      const message = {
        senderId: Number(userId),
        content: inputValue,
        receiverId: ADMIN_ID,
        createdAt: new Date(new Date().getTime() - 9 * 60 * 60 * 1000),
      };

      client.send("/app/chat.send", {}, JSON.stringify(message));
      setMessages((p) => [...p, message]);

      setInputValue("");
    }
  };

  return (
    <S.Container>
      <S.ChatBox ref={chatBoxRef}>
        {isError || !histories ? (
          <Text fontType="sub1">과거 이력을 불러오는 데 실패했습니다.</Text>
        ) : isLoading ? (
          <>
            <CustomLoading text="과거 이력을 불러오는 중입니다." />
          </>
        ) : (
          histories.chatHistoryDtos.map((msg, index) => {
            const isAdmin = msg.senderId === ADMIN_ID;
            return (
              <S.MessageContainer $isAdmin={isAdmin} key={index}>
                {isAdmin ? (
                  <>
                    <img
                      src={admin}
                      width={32}
                      height={32}
                      style={{ alignSelf: "flex-start" }}
                    />
                    <S.Message $isAdmin={isAdmin}>{msg.content}</S.Message>
                    <Text fontColor="gray" fontType="sub2">
                      {formatTime(msg.createdAt)}
                    </Text>
                  </>
                ) : (
                  <>
                    <Text fontColor="gray" fontType="sub2">
                      {formatTime(msg.createdAt)}
                    </Text>
                    <S.Message $isAdmin={isAdmin}>{msg.content}</S.Message>
                  </>
                )}
              </S.MessageContainer>
            );
          })
        )}
        <S.ReadHere ref={readHereRef}>
          {isFirst ? <>대화를 시작해주세요.</> : <>여기까지 읽으셨습니다.</>}
        </S.ReadHere>
        {messages.map((msg, index) => {
          const isAdmin = msg.senderId === ADMIN_ID;
          return (
            <S.MessageContainer $isAdmin={isAdmin} key={index}>
              {isAdmin ? (
                <>
                  <img
                    src={admin}
                    width={32}
                    height={32}
                    style={{ alignSelf: "flex-start" }}
                  />
                  <S.Message $isAdmin={isAdmin}>{msg.content}</S.Message>
                  <Text fontColor="gray" fontType="sub2">
                    {formatTime(msg.createdAt)}
                  </Text>
                </>
              ) : (
                <>
                  <Text fontColor="gray" fontType="sub2">
                    {formatTime(msg.createdAt)}
                  </Text>
                  <S.Message $isAdmin={isAdmin}>{msg.content}</S.Message>
                </>
              )}
            </S.MessageContainer>
          );
        })}
      </S.ChatBox>
      <S.InputContainer>
        <S.Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
          placeholder="메시지를 입력하세요"
        />
        <S.SendButton $isDisable={inputValue === ""} onClick={sendMessage}>
          <img src={sendSvg} width={24} height={24} />
        </S.SendButton>
      </S.InputContainer>
    </S.Container>
  );
}

export default Chatting;
