import { Text } from "@/shared/ui/Text";
import * as S from "./MyPayment.style";
import NoCarIcon from "@/shared/assets/no_car.svg";
import { MyPaymentCarCard } from "@/widgets/MyPaymentCarCard";
import { StatusType } from "@/widgets/MyPaymentCarCard/model/type";
import {
  BuyCarListResponse,
  // BuyCarListResponse,
  handleBuyCarList,
} from "@/pages/MyPayment/api/api";
// import { useQuery } from "@tanstack/react-query";
// import { CustomLoading } from "@/shared/ui/CustomLoading";
// import { mockPayCarData } from "@/widgets/MyPaymentCarCard/api/MockData";
import { useEffect, useState } from "react";

export function MyPayment() {
  const [myCarBuy, setMyCarBuy] = useState<BuyCarListResponse | null>(null);
  // const {
  //   data: myCarBuy,
  //   isFetching,
  //   isError,
  // } = useQuery<BuyCarListResponse>({
  //   queryKey: ["myCarBuy"],
  //   queryFn: () => handleBuyCarList(),
  // });

  // if (isFetching) {
  //   return <CustomLoading text={"로딩 중 입니다..."} />; // 로딩 상태 처리
  // }

  // if (isError) {
  //   return <div>Error loading My Payment.</div>; // 에러 상태 처리
  // }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await handleBuyCarList(); // 데이터 가져오기
        setMyCarBuy(data);
      } catch (error) {
        console.error("데이터 가져오기 오류:", error);
      }
    };

    fetchData();
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

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
                id={car.id}
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
