import { Text } from "@/shared/ui/Text";
import * as S from "./BottomNavigation.style";
import home from "../../../shared/assets/home.svg";
import list from "../../../shared/assets/list.svg";
import sell from "../../../shared/assets/car.svg";
import reservation from "../../../shared/assets/location.svg";
import mypage from "../../../shared/assets/user.svg";
import { useNavigate } from "react-router-dom";

export function BottomNavigation() {
  const navigate = useNavigate();

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
          <S.MenuImg src={home} alt="home" />
          <Text fontSize={11}>홈</Text>
        </S.MenuBox>
      </S.MenuWrap>
      <S.MenuWrap>
        <S.MenuBox onClick={handleListClick}>
          <S.MenuImg src={list} alt="list" />
          <Text fontSize={11}>차량목록</Text>
        </S.MenuBox>
      </S.MenuWrap>
      <S.MenuWrap>
        <S.MenuBox onClick={handleSellClick}>
          <S.MenuImg src={sell} alt="sell" />
          <Text fontSize={11}>내차팔기</Text>
        </S.MenuBox>
      </S.MenuWrap>
      <S.MenuWrap>
        <S.MenuBox onClick={handleReservationClick}>
          <S.MenuImg src={reservation} alt="reservation" />
          <Text fontSize={11}>시승소예약</Text>
        </S.MenuBox>
      </S.MenuWrap>
      <S.MenuWrap>
        <S.MenuBox onClick={handleMyPageClick}>
          <S.MenuImg src={mypage} alt="mypage" />
          <Text fontSize={11}>마이페이지</Text>
        </S.MenuBox>
      </S.MenuWrap>
    </S.Container>
  );
}
