import { CarCard } from "@/entities/Car";
import { MyPaymentCar } from "@/widgets/MyPaymentCarCard/model/type";
import * as S from "./MyPaymentCarCard.style";
import { Button } from "@/shared/ui/Button";
import { useState } from "react";
import { DefaultModal } from "@/shared/ui/DefaultModal";
import { WriteReview } from "@/features/WriteReview";
import { DefaultPopup } from "@/shared/ui/DefaultPopup";

export function MyPaymentCarCard({
  id,
  mainImage,
  name,
  registrationDate,
  mileage,
  licensePlate,
  price,
  isReviewed,
  state,
}: MyPaymentCar) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleSubmit = () => {
    setIsPopupOpen(true);
    setModalOpen(false);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <S.Container>
      <CarCard
        id={id}
        mainImage={mainImage}
        name={name}
        registrationDate={registrationDate}
        mileage={mileage}
        licensePlate={licensePlate}
        price={price}
        state={state}
      />
      {!isReviewed && state === "Not available for purchase" && (
        <>
          <br />
          <Button
            buttonClick={handleModalOpen}
            text={"리뷰 작성하기"}
            size={"big"}
          />
        </>
      )}
      <DefaultModal
        open={isModalOpen}
        handleClose={handleModalClose}
        title={"리뷰 작성하기"}
        children={<WriteReview handleSubmit={handleSubmit} />}
      ></DefaultModal>
      {isPopupOpen && (
        <S.PopupContainer>
          <DefaultPopup
            open={isPopupOpen}
            handleClose={handlePopupClose}
            content={"리뷰 작성이 완료되었습니다."}
          ></DefaultPopup>
        </S.PopupContainer>
      )}
    </S.Container>
  );
}
