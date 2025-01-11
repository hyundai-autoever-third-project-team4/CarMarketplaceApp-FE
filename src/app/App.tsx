import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "@/widgets/Header";
import * as S from "./App.style";
import { BottomNavigation } from "@/widgets/BottomNavigation";
import { DefaultModal } from "@/shared/ui/DefaultModal";
import { DefaultPopup } from "@/shared/ui/DefaultPopup";
import { useReducer } from "react";
// import { CarCard } from "@/shared/ui/CarCard";
// import { Text } from "@/shared/ui/Text";
import { Button } from "@/shared/ui/Button";
// import { RadioButton } from "@/shared/ui/RadioButton";
// import { RatingChart } from "@/shared/ui/RatingChart";
// import { useState } from "react";

function App() {
  const [modal, handleModal] = useReducer((prev) => !prev, false);
  const [popup, handlePopup] = useReducer((prev) => !prev, false);
  const navigate = useNavigate();
  // const [value, setRaiting] = useState<number>(3);

  return (
    <S.Container>
      <Header />
      <Button text="모달 열기" size="small" buttonClick={handleModal} />
      <Button text="팝업 열기" size="small" buttonClick={handlePopup} />
      {/* 아래는 사용 방법 예시임. */}
      {/* <RatingChart rate={value} setRating={setRaiting} />
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
      <DefaultModal
        open={modal}
        handleClose={handleModal}
        title="차량 리뷰 조회"
      >
        sdad
      </DefaultModal>
      <DefaultPopup
        open={popup}
        handleClose={handlePopup}
        isLoginPopup={true}
        content={
          <>
            결제가 완료되었습니다.
            <br />
            관리자가 결제 내역 검토 후, 구매가 확정됩니다.
            <br />
            (탁송과 함께 계약서 작성도 진행됩니다.)
          </>
        }
        handleConfirmClick={() => {
          navigate("/search");
          handlePopup();
        }}
      />
      <Outlet />
      <ReactQueryDevtools initialIsOpen={true} />
      <BottomNavigation />
    </S.Container>
  );
}

export default App;
