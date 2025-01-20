import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const StorageKey = "storage-key";

type LoginCheckState = {
  loginCheck: boolean; // 상태의 타입
  changeLoginCheck: () => void; // 사용자 설정 함수
};

const useLoginCheckStore = create<LoginCheckState>()(
  devtools(
    persist(
      (set) => ({
        loginCheck: false,

        changeLoginCheck: () =>
          set((state) => ({
            loginCheck: !state.loginCheck, // 현재 상태를 참조하여 토글
          })),
      }),
      {
        name: StorageKey, // persist 옵션
      }
    ),
    {
      name: "loginCheckStore", // devtools 옵션 (선택)
    }
  )
);

export default useLoginCheckStore;
