import * as S from "./SearchHeader.style";
import backImg from "../../../shared/assets/back_arrow.svg";
import search from "../../../shared/assets/search.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function SearchHeader() {
  const navigate = useNavigate();
  const [isFocused, setIsFocused] = useState(false); // focus 상태 관리

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <S.Container>
      <S.LeftWrap>
        <S.BackImg src={backImg} alt="Back" onClick={handleBackClick} />
        <S.SearchInput
          placeholder={isFocused ? "" : "모델명, 차량번호로 검색해보세요."} // focus 상태에 따라 placeholder 변경
          onFocus={() => setIsFocused(true)} // focus 시 상태 변경
          onBlur={() => setIsFocused(false)} // blur 시 상태 변경
        />
      </S.LeftWrap>
      <S.SearchImg src={search} alt="Search" onClick={handleSearchClick} />
    </S.Container>
  );
}
