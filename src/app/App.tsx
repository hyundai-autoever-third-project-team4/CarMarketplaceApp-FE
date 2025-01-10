import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";
import * as S from "./App.style";
import { Text } from "@/shared/ui/Text";

function App() {
  return (
    <S.Container>
      <Outlet />
      <ReactQueryDevtools initialIsOpen={true} />
    </S.Container>
  );
}

export default App;
