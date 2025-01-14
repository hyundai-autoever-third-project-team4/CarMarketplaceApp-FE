import * as S from "./MySell.style";
import { Text } from "@/shared/ui/Text";
import NoCarIcon from "@/shared/assets/no_car.svg";
import mockSellCarData from "@/features/SellCarCard/api/MockData";
import { SellCarCard } from "@/features/SellCarCard";
import { CarCard } from "@/entities/Car";

export function MySell() {
  return (
    <S.Container>
      <S.Title>
        <Text fontType="title">내가 판매한 차량</Text>
      </S.Title>
      {mockSellCarData ? (
        mockSellCarData.map((car) => (
          <div key={car.id}>
            {car.state === "Pending sale" || car.state === "Sale approved" ? (
              <SellCarCard
                name={car.name}
                registrationDate={car.registrationDate}
                mileage={car.mileage}
                licensePlate={car.licensePlate}
                price={null}
                state={car.state}
                id={car.id}
                mainImage={car.mainImage}
              />
            ) : (
              <CarCard
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
  );
}
