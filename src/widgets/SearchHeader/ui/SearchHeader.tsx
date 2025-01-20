import * as S from "./SearchHeader.style";
import backImg from "../../../shared/assets/back_arrow.svg";
import search from "../../../shared/assets/search.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SearchFormValue } from "@/features/SearchForm";
import { UseFormWatch } from "react-hook-form";

interface SearchHeaderProps {
  handleSearchClick: (data: SearchFormValue) => void;
  watch: UseFormWatch<SearchFormValue>;
  setParam: (param: string) => void;
}

export function SearchHeader({
  handleSearchClick,
  watch,
  setParam,
}: SearchHeaderProps) {
  const navigate = useNavigate();
  const [isFocused, setIsFocused] = useState(false); // focus 상태 관리

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <S.Container>
      <S.LeftWrap>
        <S.BackImg src={backImg} alt="Back" onClick={handleBackClick} />
        <S.SearchInput
          placeholder={isFocused ? "" : "모델명, 차량번호로 검색해보세요."} // focus 상태에 따라 placeholder 변경
          onFocus={() => setIsFocused(true)} // focus 시 상태 변경
          onBlur={() => setIsFocused(false)} // blur 시 상태 변경
          onChange={(e) => setParam(e.target.value)}
        />
      </S.LeftWrap>
      <S.SearchImg
        src={search}
        alt="Search"
        onClick={() => handleSearchClick(watch())}
      />
    </S.Container>
  );
}
