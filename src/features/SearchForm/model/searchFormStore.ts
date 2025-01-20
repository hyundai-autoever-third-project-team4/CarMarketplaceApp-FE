import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { DEFAULT_VALUE } from "./model";
import { SearchFormValue } from "./type";

type SearchFormState = {
  param: string;
  searchForm: SearchFormValue;
  setSearchForm: (newSearchForm: SearchFormValue) => void;
  setParams: (param: string) => void;
};

export const useSearchFormStore = create<SearchFormState>()(
  devtools(
    (set) => ({
      param: "",
      searchForm: DEFAULT_VALUE,

      setSearchForm: (newSearchForm: SearchFormValue) =>
        set({ searchForm: newSearchForm }),
      setParams: (param: string) => set({ param: param }),
    }),

    {
      name: "searchFormStore", // devtools 옵션 (선택)
    }
  )
);
