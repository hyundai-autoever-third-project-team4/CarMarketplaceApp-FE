import * as S from "./MySell.style";
import { Text } from "@/shared/ui/Text";
import NoCarIcon from "@/shared/assets/no_car.svg";
import { SellCarCard } from "@/features/SellCarCard";
import { CarCard } from "@/entities/Car";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { DefaultModal } from "@/shared/ui/DefaultModal";
import { DefaultPopup } from "@/shared/ui/DefaultPopup";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  handleCompleteSale,
  handleMySellCar,
  handleReject,
  MySellCars,
} from "@/pages/MySell/api/api";
import { CustomLoading } from "@/shared/ui/CustomLoading";

export function MySell() {
  const navigate = useNavigate();
  const queryClient = useQueryClient(); // QueryClient 인스턴스 가져오기
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isRejectPopupOpen, setIsRejectPopupOpen] = useState(false);
  const [carPrice, setCarPrice] = useState(0);
  const [carImg, setCarImg] = useState("");
  const [clickedCarId, setClickedCarId] = useState("");

  const {
    data: myCarSell,
    isFetching,
    isError,
  } = useQuery<MySellCars>({
    queryKey: ["myCarSell"],
    queryFn: () => handleMySellCar(),
  });

  const handleCarCardClick = (id: string) => {
    navigate(`/carDetail/${id}`);
  };

  const handleModalOpen = (id: string, price: number, img?: string) => {
    setCarImg(img ? img : "");
    setClickedCarId(id);
    setCarPrice(price);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  //판매 승인시
  const handlePopupOpen = async (clickedCarId: string) => {
    try {
      await handleCompleteSale(clickedCarId);
      queryClient.invalidateQueries<any>(["myCarSell"]);
      setIsPopupOpen(true);
      setIsModalOpen(false);
    } catch (error) {
      console.error("승인 요청 중 오류 발생 :", error);
    }
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const handleRejectPopupOpen = async (clickedCarId: string) => {
    try {
      await handleReject(clickedCarId); // 거절 요청을 보냄
      queryClient.invalidateQueries<any>(["myCarSell"]);
      setIsRejectPopupOpen(true);
      setIsModalOpen(false);
    } catch (error) {
      console.error("거절 요청 중 오류 발생:", error);
    }
  };

  const handleRejectPopupClose = () => {
    setIsRejectPopupOpen(false);
  };

  return (
    <>
      {isFetching || isError || !myCarSell ? (
        <CustomLoading text={"로딩 중입니다..."} middle={true} />
      ) : (
        <S.Container>
          <S.Title>
            <Text fontType="title">내가 판매한 차량</Text>
          </S.Title>
          {myCarSell.userSellCarList ? (
            myCarSell.userSellCarList.map((car) => (
              <div key={car.id}>
                {car.status === "PENDING_SALE" ||
                car.status === "SALE_APPROVED" ? (
                  <SellCarCard
                    onClick={() =>
                      handleModalOpen(
                        car.id,
                        car.price ? car.price : 0,
                        car.mainImage ? car.mainImage : ""
                      )
                    }
                    name={car.name}
                    registrationDate={car.registrationDate}
                    mileage={car.mileage}
                    licensePlate={car.licensePlate}
                    status={car.status}
                    id={car.id}
                    mainImage={car.mainImage!}
                    price={null}
                  />
                ) : (
                  <CarCard
                    id={car.id}
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
      )}
      <DefaultModal
        open={isModalOpen}
        handleClose={() => handleModalClose()}
        title={"측정 결과"}
        children={
          <>
            <S.CarImg src={carImg} />
            <S.TextArea>
              <Text fontType="sub2">측정 결과 귀하의 차량의 금액은</Text>
              <Text fontType="subTitle">{carPrice / 10000}만원</Text>
              <Text fontType="sub2">입니다.</Text>
            </S.TextArea>
            <S.ButtonArea>
              <S.RejectButton
                onClick={() => handleRejectPopupOpen(clickedCarId)}
              >
                <Text fontType="sub1" fontColor="red" fontWeight="bold">
                  거부
                </Text>
              </S.RejectButton>
              <S.ApproveButton onClick={() => handlePopupOpen(clickedCarId)}>
                <Text fontType="sub1" fontColor="white" fontWeight="bold">
                  승인
                </Text>
              </S.ApproveButton>
            </S.ButtonArea>
          </>
        }
      />
      <DefaultPopup
        open={isPopupOpen}
        handleClose={() => handlePopupClose()}
        content={
          <>
            판매 신청이 완료 되었습니다.
            <br /> <br />
            차량 인계를 위해 곧 연락 드리도록 하겠습니다.
          </>
        }
      />
      <DefaultPopup
        open={isRejectPopupOpen}
        handleClose={() => handleRejectPopupClose()}
        content={
          <>
            판매 등록을 거부하셨습니다.
            <br /> <br />
            차자바를 이용해주셔서 감사합니다.
          </>
        }
      />
    </>
  );
}
