import { SearchHeader } from "@/widgets/SearchHeader";
import { SearchForm } from "@/features/SearchForm";
import * as S from "./Search.style";
import { useNavigate } from "react-router-dom";
import { SearchFormValue } from "@/features/SearchForm";
import { useForm } from "react-hook-form";
import { useSearchFormStore } from "@/features/SearchForm";

export function Search() {
  const { searchForm, setSearchForm } = useSearchFormStore();
  const { handleSubmit, watch, setValue } = useForm<SearchFormValue>({
    defaultValues: searchForm,
  });
  const navigate = useNavigate();

  const onSubmit = (data: SearchFormValue) => {
    setSearchForm(data);
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
