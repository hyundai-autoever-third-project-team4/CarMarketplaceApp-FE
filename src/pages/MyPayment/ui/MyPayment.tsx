import { Text } from "@/shared/ui/Text";
import * as S from "./MyPayment.style";
import NoCarIcon from "@/shared/assets/no_car.svg";
import { MyPaymentCarCard } from "@/widgets/MyPaymentCarCard";
import { StatusType } from "@/widgets/MyPaymentCarCard/model/type";
import {
  BuyCarListResponse,
  handleBuyCarList,
} from "@/pages/MyPayment/api/api";
import { useQuery } from "@tanstack/react-query";

export function MyPayment() {
  const {
    data: myCarBuy,
    isFetching,
    isError,
  } = useQuery<BuyCarListResponse>({
    queryKey: ["myCarBuy"],
    queryFn: () => handleBuyCarList(),
  });
  return (
    <>
      <S.Container>
        <S.Title>
          <Text fontType="title">내가 구매한 차량</Text>
        </S.Title>
        {myCarBuy && myCarBuy.userPurchaseCarList.length != 0 ? (
          myCarBuy.userPurchaseCarList.map((car, index) => (
            <div key={index}>
              <MyPaymentCarCard
                id={String(index)}
                name={car.carName}
                registrationDate={car.registrationDate}
                mileage={car.mileage}
                licensePlate={car.licensePlate}
                price={car.price!}
                mainImage={car.mainImage!}
                isReviewed={car.isReviewed}
                state={car.status as StatusType}
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
