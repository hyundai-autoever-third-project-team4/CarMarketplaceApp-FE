import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { DEFAULT_VALUE } from "./model";
import { SearchFormValue } from "./type";

const StorageKey = "storage-key";

type SearchFormState = {
  searchForm: SearchFormValue;
  setSearchForm: (newSearchForm: SearchFormValue) => void;
};

export const useSearchFormStore = create<SearchFormState>()(
  devtools(
    (set) => ({
      searchForm: DEFAULT_VALUE,

      setSearchForm: (newSearchForm: SearchFormValue) =>
        set({ searchForm: newSearchForm }),
    }),

    {
      name: "searchFormStore", // devtools 옵션 (선택)
    }
  )
);
