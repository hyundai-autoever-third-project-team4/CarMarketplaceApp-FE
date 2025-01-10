import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/Header";
import * as S from "./App.style";
import { CarCard } from "@/shared/ui/CarCard";

function App() {
  return (
    <S.Container>
      <Header />
      <CarCard
        carImg="/src/shared/assets/default.png"
        name="2022 투싼(NX4) 가솔린 1.6 터보 2WD 모던"
        registrationDate="21년 09월"
        mileage={48537}
        licensePlate="303누7499"
        price={2390}
      />
      <Outlet />
      <ReactQueryDevtools initialIsOpen={true} />
    </S.Container>
  );
}

export default App;
