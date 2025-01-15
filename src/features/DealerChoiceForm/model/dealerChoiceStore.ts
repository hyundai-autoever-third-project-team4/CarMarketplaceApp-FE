import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { FormValues } from "./type";
const StorageKey = "storage-key";

type DealerFormState = {
  dealerForm: FormValues;
  setDealerForm: (newSearchForm: FormValues) => void;
};

const DEALER_DEFAULT = {
  budget: null,
  carTypes: [],
};

export const useDealerFormStore = create<DealerFormState>()(
  devtools(
    persist(
      (set) => ({
        dealerForm: DEALER_DEFAULT,

        setDealerForm: (newForm: FormValues) => set({ dealerForm: newForm }),
      }),
      {
        name: StorageKey, // persist 옵션
      }
    ),
    {
      name: "dealerStore", // devtools 옵션 (선택)
    }
  )
);
