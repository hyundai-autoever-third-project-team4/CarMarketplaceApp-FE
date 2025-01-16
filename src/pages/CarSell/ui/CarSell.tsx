import { Text } from "@/shared/ui/Text";
import * as S from "./CarSell.style";
import { Button } from "@/shared/ui/Button";
import { useEffect, useState } from "react";
import { FindCarInfoCard, handleFindCarInfo } from "@/widgets/FindCarInfoCard";
import { DefaultPopup } from "@/shared/ui/DefaultPopup";
import { CarInfoResponse } from "@/widgets/FindCarInfoCard/api/api";
import { useQuery } from "@tanstack/react-query";
import { CustomLoading } from "@/shared/ui/CustomLoading";

export function CarSell() {
  const [findCar, setFindCar] = useState(false);
  const [isSellPopupOpen, setIsSellPopupOpen] = useState(false);
  const [isCompletePopupOpen, setIsCompletePopupOpen] = useState(false);
  const [licensePlate, setLicensePlate] = useState("");
  const [ownerName, setOwnerName] = useState("");

  const {
    data: carInfo,
    isFetching,
    isError,
    refetch,
  } = useQuery<CarInfoResponse>({
    queryKey: ["findCarInfo"],
    queryFn: async () => {
      return await handleFindCarInfo(licensePlate, ownerName);
    },
    enabled: findCar,
    retry: 1,
    gcTime: 0,
  });
  console.log(carInfo, isFetching, isError);
  const handleFindCarTrue = () => {
    if (!licensePlate || !ownerName) {
      alert("차량 번호판과 소유자 이름을 입력해 주세요.");
      return; // 함수 종료
    }
    setFindCar(true); // findCar 상태 업데이트
    refetch();
  };

  // 오류 처리
  useEffect(() => {
    if (isError) {
      alert("일치하는 차량이 없습니다.");
      setFindCar(false); // 오류 발생 시 findCar 상태를 false로 설정
      setLicensePlate("");
      setOwnerName("");
    }
  }, [isError]); // isError가 변경될 때마다 실행

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
          disabled={findCar}
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
          disabled={findCar}
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
      {findCar && !isFetching && carInfo && (
        <>
          <S.TitleWrap>
            <Text fontType="title">차량 정보 확인</Text>
          </S.TitleWrap>
          <FindCarInfoCard
            mainImage={carInfo ? carInfo.mainImage : ""}
            licensePlate={carInfo.carDetails.licensePlate}
            carName={carInfo.carDetails.name}
            registrationDate={carInfo.carDetails.registrationDate}
            modelYear={carInfo.carDetails.modelYear}
            mileage={String(carInfo.carDetails.mileage) + "km"}
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
      {isFetching && <CustomLoading text={"차량을 찾는 중 입니다..."} />}
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
