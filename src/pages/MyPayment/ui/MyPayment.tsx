import { Text } from "@/shared/ui/Text";
import * as S from "./MyPayment.style";
import NoCarIcon from "@/shared/assets/no_car.svg";
import { MyPaymentCarCard } from "@/widgets/MyPaymentCarCard";
import { mockPayCarData } from "@/widgets/MyPaymentCarCard/api/MockData";
import { StatusType } from "@/widgets/MyPaymentCarCard/model/type";

export function MyPayment() {
  return (
    <>
      <S.Container>
        <S.Title>
          <Text fontType="title">내가 판매한 차량</Text>
        </S.Title>
        {mockPayCarData ? (
          mockPayCarData.map((car) => (
            <div key={car.id}>
              <MyPaymentCarCard
                name={car.name}
                registrationDate={car.registrationDate}
                mileage={car.mileage}
                licensePlate={car.licensePlate}
                price={car.price!}
                mainImage={car.mainImage!}
                isReviewed={car.isReviewed}
                state={car.state as StatusType}
              />
              {car.isReviewed ? <S.MarginBottom /> : <S.ReviewMarginBottom />}
            </div>
          ))
        ) : (
          <S.NoDataContainer>
            <S.NoDataImg src={NoCarIcon} />
            <Text fontType="subTitle">아직 구매한 차량이 없습니다.</Text>
            <S.NoDataSubText>
              <Text fontType="sub1" fontColor="primary">
                차자바에서 인증된
              </Text>
              <Text fontType="sub1" fontColor="primary">
                나만의 중고차를 찾아보세요!
              </Text>
            </S.NoDataSubText>
          </S.NoDataContainer>
        )}
      </S.Container>
    </>
  );
}
