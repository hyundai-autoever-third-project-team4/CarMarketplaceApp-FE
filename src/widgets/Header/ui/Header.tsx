import * as S from "./Header.style";
import chajava from "../../../shared/assets/chajava.svg";
import search from "../../../shared/assets/search.svg";
import chat from "../../../shared/assets/chat.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { DefaultPopup } from "@/shared/ui/DefaultPopup";
import { useReducer } from "react";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [popup, setPopup] = useReducer((p) => !p, false);

  if (location.pathname == "/search") {
    return;
  }

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleSearchClick = () => {
    navigate("/search");
  };

  const handleChatClick = () => {
    if (localStorage.getItem("userId") !== null) {
      navigate("/chatting");
    } else {
      setPopup();
    }
  };

  const moveToMy = () => {
    navigate("/my");
    setPopup();
  };

  return (
    <>
      <S.Container>
        <S.LogoImg src={chajava} alt="Chajava Logo" onClick={handleLogoClick} />
        <S.RightWrap>
          <S.SearchImg src={search} alt="Search" onClick={handleSearchClick} />
          <S.ChatImg src={chat} alt="Chat" onClick={handleChatClick} />
        </S.RightWrap>
      </S.Container>
      <DefaultPopup
        open={popup}
        isLoginPopup
        handleClose={setPopup}
        content={"로그인 후 가능합니다."}
        handleConfirmClick={moveToMy}
      />
    </>
  );
}
