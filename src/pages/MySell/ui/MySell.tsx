import * as S from "./MySell.style";
import { Text } from "@/shared/ui/Text";
import NoCarIcon from "@/shared/assets/no_car.svg";
import mockSellCarData from "@/features/SellCarCard/api/MockData";
import { SellCarCard } from "@/features/SellCarCard";
import { CarCard } from "@/entities/Car";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { DefaultModal } from "@/shared/ui/DefaultModal";
import { DefaultPopup } from "@/shared/ui/DefaultPopup";

export function MySell() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isRejectPopupOpen, setIsRejectPopupOpen] = useState(false);
  const [carPrice, setCarPrice] = useState(0);
  const [carImg, setCarImg] = useState("");

  const handleCarCardClick = (id: string) => {
    navigate(`/carDetail/${id}`);
  };

  const handleModalOpen = (price: number, img?: string) => {
    setCarImg(img ? img : "");
    setCarPrice(price);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
    setIsModalOpen(false);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const handleRejectPopupOpen = () => {
    setIsRejectPopupOpen(true);
    setIsModalOpen(false);
  };

  const handleRejectPopupClose = () => {
    setIsRejectPopupOpen(false);
  };

  return (
    <>
      <S.Container>
        <S.Title>
          <Text fontType="title">내가 판매한 차량</Text>
        </S.Title>
        {mockSellCarData ? (
          mockSellCarData.map((car) => (
            <div key={car.id}>
              {car.state === "Pending sale" || car.state === "Sale approved" ? (
                <SellCarCard
                  onClick={() =>
                    handleModalOpen(
                      car.price ? car.price : 0,
                      car.mainImage ? car.mainImage : ""
                    )
                  }
                  name={car.name}
                  registrationDate={car.registrationDate}
                  mileage={car.mileage}
                  licensePlate={car.licensePlate}
                  state={car.state}
                  id={car.id}
                  mainImage={car.mainImage}
                  price={null}
                />
              ) : (
                <CarCard
                  onClick={() => handleCarCardClick(car.id)}
                  name={car.name}
                  registrationDate={car.registrationDate}
                  mileage={car.mileage}
                  licensePlate={car.licensePlate}
                  price={car.price!}
                  mainImage={car.mainImage!}
                />
              )}
              <S.MarginBottom />
            </div>
          ))
        ) : (
          <S.NoDataContainer>
            <S.NoDataImg src={NoCarIcon} />
            <Text fontType="subTitle">판매한 차량이 없습니다.</Text>
            <S.NoDataSubText>
              <Text fontType="sub1" fontColor="primary">
                믿고 맡기는 차자바에서
              </Text>
              <Text fontType="sub1" fontColor="primary">
                고객님의 차를 판매해보세요!
              </Text>
            </S.NoDataSubText>
          </S.NoDataContainer>
        )}
      </S.Container>
      <DefaultModal
        open={isModalOpen}
        handleClose={() => handleModalClose()}
        title={"측정 결과"}
        children={
          <>
            <S.CarImg src={carImg} />
            <S.TextArea>
              <Text fontType="sub1">측정 결과 귀하의 차량의 금액은</Text>
              <Text fontType="title">{carPrice}만원 </Text>
              <Text fontType="sub1">입니다.</Text>
            </S.TextArea>
            <S.ButtonArea>
              <S.RejectButton onClick={handleRejectPopupOpen}>
                <Text fontType="sub1" fontColor="red" fontWeight="bold">
                  거부
                </Text>
              </S.RejectButton>
              <S.ApproveButton onClick={handlePopupOpen}>
                <Text fontType="sub1" fontColor="white" fontWeight="bold">
                  승인
                </Text>
              </S.ApproveButton>
            </S.ButtonArea>
          </>
        }
      ></DefaultModal>
      <DefaultPopup
        open={isPopupOpen}
        handleClose={() => handlePopupClose()}
        content={
          <>
            <div style={{ marginBottom: "16px" }}>
              판매 신청이 완료 되었습니다.
            </div>
            <div>차량 인계를 위해 곧 연락 드리도록 하겠습니다.</div>
          </>
        }
      ></DefaultPopup>
      <DefaultPopup
        open={isRejectPopupOpen}
        handleClose={() => handleRejectPopupClose()}
        content={
          <>
            <div style={{ marginBottom: "16px" }}>
              판매 등록을 거부하셨습니다.
            </div>
            <div>차자바를 이용해주셔서 감사합니다.</div>
          </>
        }
      ></DefaultPopup>
    </>
  );
}
