import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { DEFAULT_VALUE } from "../ui/SearchForm";
import { SearchFormValue } from "./type";

const StorageKey = "storage-key";

type SearchFormState = {
  searchForm: SearchFormValue;
  setSearchForm: (newSearchForm: SearchFormValue) => void;
};

export const useSearchFormStore = create<SearchFormState>()(
  devtools(
    persist(
      (set) => ({
        searchForm: DEFAULT_VALUE,

        setSearchForm: (newSearchForm: SearchFormValue) =>
          set({ searchForm: newSearchForm }),
      }),
      {
        name: StorageKey, // persist 옵션
      }
    ),
    {
      name: "UserStore", // devtools 옵션 (선택)
    }
  )
);
