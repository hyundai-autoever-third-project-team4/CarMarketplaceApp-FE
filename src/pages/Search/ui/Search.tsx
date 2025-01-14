import { SearchHeader } from "@/widgets/SearchHeader";
import { SearchForm } from "@/features/SearchForm";
import * as S from "./Search.style";
import { useNavigate } from "react-router-dom";
import { SearchFormValue } from "@/features/SearchForm";

export function Search() {
  const navigate = useNavigate();

  const moveToCarList = (data: SearchFormValue) => {
    navigate("/carList", {
      state: data,
    });
  };
  return (
    <S.Container>
      <SearchHeader />
      <SearchForm moveToCarList={moveToCarList} />
    </S.Container>
  );
}
