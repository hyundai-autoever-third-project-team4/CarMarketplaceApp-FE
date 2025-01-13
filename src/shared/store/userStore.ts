import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { User, UserInit } from "./userType";

const StorageKey = "storage-key";

type UserState = {
  user: User | UserInit; // 상태의 타입
  setUser: (newUser: User) => void; // 사용자 설정 함수
  logOut: () => void; // 로그아웃 함수
};

const userInit: UserInit = {
  id: null,
  email: null,
  name: null,
  profileImage: null,
};

const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: userInit,

        setUser: (newUser: User) => set({ user: newUser }),
        logOut: () => set({ user: userInit }),
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

export default useUserStore;
