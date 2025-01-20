import { useEffect, useRef, useState } from "react";
import * as S from "./Chatting.style";
import sendSvg from "@shared/assets/send.svg";
import admin from "@shared/assets/isAdmin.svg";

// WebSocket 서버 URL
const SOCKET_URL = "https://chajava.store/api/ws/chat";
const ADMIN_ID = 7;

interface Message {
  senderId: number;
  content: string;
  receiverId: number;
}

export function Chatting() {
  const userId = localStorage.getItem("userId");
  const [client, setClient] = useState<any>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      senderId: ADMIN_ID,
      content: "무엇을 도와드릴까요?",
      receiverId: Number(userId),
    },
    {
      senderId: ADMIN_ID,
      content: "무엇을 도와드릴까요?",
      receiverId: Number(userId),
    },
    {
      senderId: ADMIN_ID,
      content: "무엇을 도와드릴까요?",
      receiverId: Number(userId),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const chatBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // WebSocket 연결 설정
    const socket = new (window as any).SockJS(SOCKET_URL);
    const stompClient = (window as any).Stomp.over(socket);

    stompClient.connect({}, () => {
      stompClient.subscribe(`/queue/user-${userId}`, (message: any) => {
        const parsedMessage = JSON.parse(message.body);
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

  const sendMessage = () => {
    if (inputValue !== "") {
      const message = {
        senderId: Number(userId),
        content: inputValue,
        receiverId: ADMIN_ID,
      };

      client.send("/app/chat.send", {}, JSON.stringify(message));
      setMessages((p) => [...p, message]);

      setInputValue("");
    }
  };

  return (
    <S.Container>
      <S.ChatBox ref={chatBoxRef}>
        {messages.map((msg, index) => {
          const isAdmin = msg.senderId === ADMIN_ID;
          return (
            <>
              {isAdmin ? (
                <div
                  key={index}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <img src={admin} width={32} height={32} />
                  <S.Message $isAdmin={isAdmin}>{msg.content}</S.Message>
                </div>
              ) : (
                <S.Message $isAdmin={isAdmin} key={index}>
                  {msg.content}
                </S.Message>
              )}
            </>
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
