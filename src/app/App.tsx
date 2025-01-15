import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/Header";
import * as S from "./App.style";
import { BottomNavigation } from "@/widgets/BottomNavigation";
import { useScrollToTop } from "@/shared/hooks/useScrollTop";

function App() {
  useScrollToTop();

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
