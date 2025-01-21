import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/Header";
import * as S from "./App.style";
import { BottomNavigation } from "@/widgets/BottomNavigation";
import { useScrollToTop } from "@/shared/hooks/useScrollTop";
import { useEffect } from "react";
import useLoginCheckStore from "@/shared/store/loginStore";

declare global {
  interface Window {
    Android2?: {
      getToken: (userId: number) => void;
    };
  }
}

function App() {
  useScrollToTop();
  const { loginCheck } = useLoginCheckStore();

  useEffect(() => {
    const userId: string | null = localStorage.getItem("userId");

    if (userId !== null && window.Android2) {
      window.Android2.getToken(Number(userId));
    }
  }, [loginCheck]);

  console.log(localStorage.getItem("userId"));

  return (
    <>
      <S.Container>
        <Header />
        <Outlet />

        <BottomNavigation />
      </S.Container>
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
