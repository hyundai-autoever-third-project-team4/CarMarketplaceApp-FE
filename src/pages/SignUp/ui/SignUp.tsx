import { useEffect, useState } from "react";
import * as S from "./SignUp.style";
import { Text } from "@/shared/ui/Text";
import { Button } from "@/shared/ui/Button";
import { noAuthInstance } from "@/shared/api/axiosInstance";
import { useNavigate } from "react-router-dom";
import { CustomLoading } from "@/shared/ui/CustomLoading";

interface LoginDataProps {
  access_token: string;
  refresh_token: string;
  userId: string;
  email: string;
}

export function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loginData, setLoginData] = useState<LoginDataProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // 서버로 Authorization Code 전송
  async function sendCodeToServer(code: string) {
    try {
      // TokenRequest 형태로 Authorization Code 전송
      const response = await fetch("https://chajava.store/api/login", {
        method: "post",
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
      //console.log("Server Response:", data);
      //alert(`Access Token: ${data.access_token}`);
      setLoginData(data);
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      localStorage.setItem("userId", data.userId);
      console.log("set된 access토큰 : ", localStorage.getItem("access_token"));
      if (data.name && data.phone && data.address) {
        navigate("/");
      } else {
        setIsLoading(true);
      }
    } catch (error) {
      console.error("Error sending Authorization Code to server:", error);
    }
  }

  async function updateProfile() {
    try {
      const response = await noAuthInstance.put(
        "/profileUpdate",
        {
          name,
          phone,
          address,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${loginData!.access_token}`, // access token 추가
          },
        }
      );

      // 서버 응답 처리
      console.log("Profile Update Response:", response.data);
      alert("회원가입이 완료되었습니다!");

      // 필요한 정보 로컬 스토리지에 저장
      const { access_token, refresh_token, userId, email } = loginData!;
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("email", email);
      localStorage.setItem("name", name);
      localStorage.setItem("phone", phone);
      localStorage.setItem("address", address);
      navigate("/");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("회원가입 중 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  }

  function extractAuthorizationCode() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code"); // URL의 "code" 파라미터 값
    if (code) {
      //console.log("Authorization Code:", code);
      sendCodeToServer(code);
      // 여기서 서버로 Authorization Code를 전송하거나 다른 작업 수행
    } else {
      console.log("No Authorization Code found.");
    }
  }

  useEffect(() => {
    extractAuthorizationCode();
  }, []);

  return (
    <>
      {isLoading ? (
        <S.Container>
          <S.TitleArea>
            <Text fontType="title">추가 정보를 입력해주세요.</Text>
          </S.TitleArea>
          <S.InputArea>
            <S.StyledInput
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <S.StyledInput
              placeholder="전화번호"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <S.StyledInput
              placeholder="주소"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </S.InputArea>
          <S.ButtonArea>
            <Button
              buttonClick={() => updateProfile()}
              text="회원가입"
              size="full"
            ></Button>
          </S.ButtonArea>
        </S.Container>
      ) : (
        <S.Container>
          <S.TitleArea>
            <CustomLoading text={"로그인 중 입니다..."}></CustomLoading>
          </S.TitleArea>
        </S.Container>
      )}
    </>
  );
}
