import { useEffect, useState } from "react";
import * as S from "./Chatting.style";
import SockJS from "sockjs-client";
import { CompatClient, Stomp } from "@stomp/stompjs";

// WebSocket 서버 URL
const SOCKET_URL = "https://chajava.store/api/ws/chat";

export function Chatting() {
  const [client, setClient] = useState<CompatClient | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    // WebSocket 연결 설정
    const socket = new SockJS(SOCKET_URL);
    const stompClient = Stomp.over(socket);

    stompClient.connect({}, () => {
      console.log("Connected to WebSocket");

      stompClient.subscribe("/queue/user-" + userId, (message: any) => {
        console.log(message);
        const parsedMessage = JSON.parse(message.body);
        setMessages((prev) => [...prev, parsedMessage.text]);
      });

      setClient(stompClient);
    });

    // Cleanup: 연결 종료
    return () => {
      if (stompClient.connected) {
        stompClient.disconnect(() => {
          console.log("Disconnected from WebSocket");
        });
      }
    };
  }, []);

  const sendMessage = () => {
    if (client && client.connected && input.trim()) {
      const message = { text: input };
      client.send("/app/chat.send", {}, JSON.stringify(message));
      setInput("");
    } else {
      console.error("STOMP 클라이언트가 연결되지 않았습니다.");
    }
  };

  return (
    <S.Container>
      <S.ChatBox>
        {messages.map((msg, index) => (
          <S.Message key={index}>{msg}</S.Message>
        ))}
      </S.ChatBox>
      <S.InputContainer>
        <S.Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="메시지를 입력하세요"
        />
        <S.SendButton onClick={sendMessage}>전송</S.SendButton>
      </S.InputContainer>
    </S.Container>
  );
}

export default Chatting;
