import { PopularCarSlide } from "@/widgets/PopularCarSlide";
import { DealerChoice } from "@/widgets/DealerChoice";
import * as S from "./Home.style";
import { Text } from "@/shared/ui/Text";
import { useEffect } from "react";

// 서버로 Authorization Code 전송
async function sendCodeToServer(code: string) {
  try {
    // TokenRequest 형태로 Authorization Code 전송
    const response = await fetch("https://chajava.store/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ authorizationCode: code }), // TokenRequest 구조에 맞게 전송
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // 서버 응답 처리
    const data = await response.json();
    console.log("Server Response:", data);
    alert(`Access Token: ${data.accessToken}`);
  } catch (error) {
    console.error("Error sending Authorization Code to server:", error);
  }
}

function extractAuthorizationCode() {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code"); // URL의 "code" 파라미터 값
  if (code) {
    console.log("Authorization Code:", code);
    sendCodeToServer(code);
    // 여기서 서버로 Authorization Code를 전송하거나 다른 작업 수행
  } else {
    console.log("No Authorization Code found.");
  }
}

export function Home() {
  useEffect(() => {
    extractAuthorizationCode();
  }, []);

  return (
    <S.Container>
      <S.TitleArea>
        <Text fontType="title">인기 차량</Text>
      </S.TitleArea>
      <PopularCarSlide />
      <S.TitleArea>
        <Text fontType="title">이 차 어때?</Text>
      </S.TitleArea>
      <DealerChoice />
    </S.Container>
  );
}
