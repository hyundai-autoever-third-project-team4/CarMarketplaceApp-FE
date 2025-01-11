import { Text } from "@/shared/ui/Text";
import * as S from "./BottomNavigation.style";
import home from "../../../shared/assets/home.svg";
import list from "../../../shared/assets/list.svg";
import sell from "../../../shared/assets/car.svg";
import reservation from "../../../shared/assets/location.svg";
import mypage from "../../../shared/assets/user.svg";
import { useLocation, useNavigate } from "react-router-dom";
import DynamicSVG from "@/shared/ui/DynamicSVG/DynamicSVG";
import theme from "@/shared/styles/theme";

export function BottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleListClick = () => {
    navigate("/carList");
  };

  const handleSellClick = () => {
    navigate("/carsell");
  };

  const handleReservationClick = () => {
    navigate("/driveCenterMap");
  };

  const handleMyPageClick = () => {
    navigate("/my");
  };

  return (
    <S.Container>
      <S.MenuWrap>
        <S.MenuBox onClick={handleHomeClick}>
          <S.MenuImg>
            <DynamicSVG
              svgUrl={home}
              width={24}
              height={24}
              color={
                location.pathname === "/"
                  ? theme.colors.black
                  : theme.colors.gray
              }
              alt="home"
            />
          </S.MenuImg>
          <Text
            fontSize={11}
            fontColor={location.pathname === "/" ? "black" : "gray"}
          >
            홈
          </Text>
        </S.MenuBox>
      </S.MenuWrap>
      <S.MenuWrap>
        <S.MenuBox onClick={handleListClick}>
          <S.MenuImg>
            <DynamicSVG
              svgUrl={list}
              width={24}
              height={24}
              color={
                location.pathname === "/carList"
                  ? theme.colors.black
                  : theme.colors.gray
              }
              alt="list"
            />
          </S.MenuImg>
          <Text
            fontSize={11}
            fontColor={location.pathname === "/carList" ? "black" : "gray"}
          >
            차량목록
          </Text>
        </S.MenuBox>
      </S.MenuWrap>
      <S.MenuWrap>
        <S.MenuBox onClick={handleSellClick}>
          <S.MenuImg>
            <DynamicSVG
              svgUrl={sell}
              width={24}
              height={24}
              color={
                location.pathname === "/carsell"
                  ? theme.colors.black
                  : theme.colors.gray
              }
              alt="sell"
            />
          </S.MenuImg>
          <Text
            fontSize={11}
            fontColor={location.pathname === "/carsell" ? "black" : "gray"}
          >
            내차팔기
          </Text>
        </S.MenuBox>
      </S.MenuWrap>
      <S.MenuWrap>
        <S.MenuBox onClick={handleReservationClick}>
          <S.MenuImg>
            <DynamicSVG
              svgUrl={reservation}
              width={24}
              height={24}
              color={
                location.pathname === "/driveCenterMap"
                  ? theme.colors.black
                  : theme.colors.gray
              }
              alt="reservation"
            />
          </S.MenuImg>
          <Text
            fontSize={11}
            fontColor={
              location.pathname === "/driveCenterMap" ? "black" : "gray"
            }
          >
            시승소예약
          </Text>
        </S.MenuBox>
      </S.MenuWrap>
      <S.MenuWrap>
        <S.MenuBox onClick={handleMyPageClick}>
          <S.MenuImg>
            <DynamicSVG
              svgUrl={mypage}
              width={24}
              height={24}
              color={
                location.pathname === "/my"
                  ? theme.colors.black
                  : theme.colors.gray
              }
              alt="mypage"
            />
          </S.MenuImg>
          <Text
            fontSize={11}
            fontColor={location.pathname === "/my" ? "black" : "gray"}
          >
            마이페이지
          </Text>
        </S.MenuBox>
      </S.MenuWrap>
    </S.Container>
  );
}
