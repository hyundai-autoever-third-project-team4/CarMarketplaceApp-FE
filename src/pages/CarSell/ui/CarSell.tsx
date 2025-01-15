import { Text } from "@/shared/ui/Text";
import * as S from "./CarSell.style";
import { Button } from "@/shared/ui/Button";
import { useState } from "react";
import { FindCarInfoCard } from "@/widgets/FindCarInfoCard";
import { findCarMockData } from "@/widgets/FindCarInfoCard/api/MockData";
import { DefaultPopup } from "@/shared/ui/DefaultPopup";

export function CarSell() {
  const [findCar, setFindCar] = useState(false);
  const [isSellPopupOpen, setIsSellPopupOpen] = useState(false);
  const [isCompletePopupOpen, setIsCompletePopupOpen] = useState(false);
  const [licensePlate, setLicensePlate] = useState("");
  const [ownerName, setOwnerName] = useState("");

  const handleFindCarTrue = () => {
    setFindCar(true);
  };

  const handleSellPopupOpen = () => {
    setIsSellPopupOpen(true);
  };

  const handleSellPopupClose = () => {
    setIsSellPopupOpen(false);
  };

  const handleSellAction = () => {
    setFindCar(false);
    setIsSellPopupOpen(false);
    setIsCompletePopupOpen(true);
    setLicensePlate("");
    setOwnerName("");
  };

  const handleCompletePopupClose = () => {
    setIsCompletePopupOpen(false);
  };

  return (
    <S.Container>
      <S.TitleWrap>
        <Text fontType="title">내차팔기</Text>
      </S.TitleWrap>
      <S.TextWrap>
        <S.TextLeftWrap>
          <S.CircleNumber>
            <Text fontType="sub1" fontColor="white">
              1
            </Text>
          </S.CircleNumber>
          <Text fontType="subTitle">차량번호 입력</Text>
        </S.TextLeftWrap>
        <S.StyledInput
          placeholder="123가1234"
          value={licensePlate} // 상태를 value로 설정
          onChange={(e) => setLicensePlate(e.target.value)} // 입력 값 변경 시 상태 업데이트
        />
      </S.TextWrap>
      <S.TextWrap>
        <S.TextLeftWrap>
          <S.CircleNumber>
            <Text fontType="sub1" fontColor="white">
              2
            </Text>
          </S.CircleNumber>
          <Text fontType="subTitle">소유주 입력</Text>
        </S.TextLeftWrap>
        <S.StyledInput
          placeholder="차자바"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
        />
      </S.TextWrap>
      {!findCar && (
        <S.ButtonWrap>
          <Button
            buttonClick={handleFindCarTrue}
            text={"차량 찾기"}
            size={"big"}
          />
        </S.ButtonWrap>
      )}
      {findCar && (
        <>
          <S.TitleWrap>
            <Text fontType="title">차량 정보 확인</Text>
          </S.TitleWrap>
          <FindCarInfoCard
            mainImage={findCarMockData.mainImage}
            licensePlate={findCarMockData.licensePlate}
            carName={findCarMockData.carName}
            registrationDate={findCarMockData.registrationDate}
            modelYear={findCarMockData.modelYear}
            mileage={findCarMockData.mileage}
          />
          <S.SellButtonWrap>
            <Button
              buttonClick={handleSellPopupOpen}
              text={"판매하기"}
              size={"full"}
            />
          </S.SellButtonWrap>
        </>
      )}
      <DefaultPopup
        open={isSellPopupOpen}
        isLoginPopup={true}
        handleClose={handleSellPopupClose}
        handleConfirmClick={handleSellAction}
        content={"정말 해당 차량을 판매하시겠습니까?"}
      />
      <DefaultPopup
        open={isCompletePopupOpen}
        handleClose={handleCompletePopupClose}
        content={
          <>
            판매 등록이 완료되었습니다.
            <br />
            <br />
            등록하신 차량은 검토 후,
            <br />
            측정된 금액을 알려드립니다.
            <br />
            금액 확인 후 판매를 결정하실 수 있습니다.
          </>
        }
      />
    </S.Container>
  );
}
