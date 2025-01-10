import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/Header";
import * as S from "./App.style";

function App() {
  return (
    <S.Container>
      <Header />
      <Outlet />
      <ReactQueryDevtools initialIsOpen={true} />
    </S.Container>
  );
}

export default App;
