import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/Header";
import * as S from "./App.style";
import { BottomNavigation } from "@/widgets/BottomNavigation";
import { CarCard } from "@/shared/ui/CarCard";
import { Text } from "@/shared/ui/Text";
import { Button } from "@/shared/ui/Button";
import { RadioButton } from "@/shared/ui/RadioButton";
import { RatingChart } from "@/shared/ui/RatingChart";
import { useState } from "react";

function App() {
  const [value, setRaiting] = useState<number>(3);

  console.log(value);
  const warning = () => {
    alert("ㅂㅈㄷㅇ");
  };
  return (
    <S.Container>
      <Header />
      <RatingChart rate={value} setRating={setRaiting} />
      <RadioButton isChecked={true} text="승용" />
      <RadioButton isChecked={false} text="승용" />
      <Button text="차량 추천 받기" size="small" buttonClick={warning} />
      <div style={{ margin: "16px 0", width: "100%" }}>
        <Button text="로그인" size="big" buttonClick={warning} />
      </div>
      <Button text="검색하기" size="full" buttonClick={warning} />
      <Text fontType="title">asddsad</Text>
      <CarCard
        carImg="/src/shared/assets/default.png"
        name="2022 투싼(NX4) 가솔린 1.6 터보 2WD 모던"
        registrationDate="21년 09월"
        mileage={48537}
        licensePlate="303누7499"
        price={2390}
      /> */}
      <Outlet />
      <ReactQueryDevtools initialIsOpen={true} />
      <BottomNavigation />
    </S.Container>
  );
}

export default App;
