import { SearchHeader } from "@/widgets/SearchHeader";
import { SearchForm } from "@/features/SearchForm";
import * as S from "./Search.style";
import { useNavigate } from "react-router-dom";
import { SearchFormValue, DEFAULT_VALUE } from "@/features/SearchForm";
import { useForm } from "react-hook-form";

export function Search() {
  const { handleSubmit, watch, setValue } = useForm<SearchFormValue>({
    defaultValues: DEFAULT_VALUE,
  });
  const navigate = useNavigate();

  const onSubmit = (data: SearchFormValue) => {
    navigate("/carList", {
      state: data,
    });
  };

  return (
    <S.Container>
      <SearchHeader handleSearchClick={onSubmit} watch={watch} />
      <SearchForm
        handleSubmit={handleSubmit}
        watch={watch}
        setValue={setValue}
        onSubmit={onSubmit}
      />
    </S.Container>
  );
}
