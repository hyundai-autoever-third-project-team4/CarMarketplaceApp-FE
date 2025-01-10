import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { User } from "./userType";

const StorageKey = "storage-key";

const userInit = {
  id: null,
  email: null,
  name: null,
  profileImage: null,
};

const useUserStore = create(
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
