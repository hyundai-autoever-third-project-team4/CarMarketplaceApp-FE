import { CarCard } from "@/entities/Car";
import { MyPaymentCar } from "@/widgets/MyPaymentCarCard/model/type";
import * as S from "./MyPaymentCarCard.style";
import { Button } from "@/shared/ui/Button";

export function MyPaymentCarCard({
  mainImage,
  name,
  registrationDate,
  mileage,
  licensePlate,
  price,
  isReviewed,
  state,
}: MyPaymentCar) {
  return (
    <S.Container>
      {state === "Not available for purchase" ? (
        <S.StatusBox $isComplete={true}>구매 완료</S.StatusBox>
      ) : (
        <S.StatusBox $isComplete={false}>구매 대기</S.StatusBox>
      )}

      <CarCard
        mainImage={mainImage}
        name={name}
        registrationDate={registrationDate}
        mileage={mileage}
        licensePlate={licensePlate}
        price={price}
      />
      {!isReviewed && state === "Not available for purchase" && (
        <>
          <br /> <Button text={"리뷰 작성하기"} size={"big"} />
        </>
      )}
    </S.Container>
  );
}
