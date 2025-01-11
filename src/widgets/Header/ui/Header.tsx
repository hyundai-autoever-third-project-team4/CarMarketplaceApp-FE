import * as S from "./Header.style";
import chajava from "../../../shared/assets/chajava.svg";
import search from "../../../shared/assets/search.svg";
import chat from "../../../shared/assets/chat.svg";
import { useLocation, useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

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
    navigate("/chatting");
  };

  return (
    <S.Container>
      <S.LogoImg src={chajava} alt="Chajava Logo" onClick={handleLogoClick} />
      <S.RightWrap>
        <S.SearchImg src={search} alt="Search" onClick={handleSearchClick} />
        <S.ChatImg src={chat} alt="Chat" onClick={handleChatClick} />
      </S.RightWrap>
    </S.Container>
  );
}
