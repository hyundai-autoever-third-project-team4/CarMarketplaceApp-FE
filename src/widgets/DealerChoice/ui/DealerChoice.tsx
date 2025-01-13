import { DealerChoiceForm } from "@/features/DealerChoiceForm";
import { DealerChoiceCarCard } from "@/entities/Car";
import { Text } from "@/shared/ui/Text";
import * as S from "./DealerChoice.style";
import { FormValues } from "@/features/DealerChoiceForm";
import { useCallback } from "react";
import Logo from "@/shared/assets/chajava.svg";
import { useDealerChoiceCars } from "../model/useDealerChoiceCars";
import noCar from "@shared/assets/no_car.svg";

export function DealerChoice() {
  const {
    dealerChoiceCars,
    isFetching,
    isError,
    refetch,
    isFirst,
    setIsFirst,
  } = useDealerChoiceCars();

  const handleSubmit = useCallback((data: FormValues) => {
    console.log(data);
    if (isFirst) setIsFirst(false);
    refetch();
  }, []);

  if (isError && !dealerChoiceCars) {
    return <S.Container>에러</S.Container>;
  }

  return (
    <>
      <S.Container>
        <Text fontType="sub2" fontColor="darkGray">
          고객님의 예산과 원하는 차종을 입력해보세요.
          <br />
          차자바에서 원하시는 차량을 찾아드립니다.
        </Text>
        <DealerChoiceForm onClick={handleSubmit} />
      </S.Container>
      <S.DealerChoiceContainer>
        {isFirst ? (
          <Text fontType="sub2">
            위의 차량 추천 받기 버튼을 눌러
            <br /> 차자바의 추천을 받아보세요!
          </Text>
        ) : !isFetching && dealerChoiceCars ? (
          <S.DealerChoiceData>
            <Text fontType="subTitle">차자바의 추천 차량</Text>

            <S.MainCar>
              <div
                style={{
                  width: "60%",
                  margin: "0 auto",
                }}
              >
                <DealerChoiceCarCard
                  id={dealerChoiceCars[0].id}
                  registrationDate={dealerChoiceCars[0].registrationDate}
                  price={dealerChoiceCars[0].price}
                  name={dealerChoiceCars[0].name}
                  mileage={dealerChoiceCars[0].mileage}
                  mainImage={dealerChoiceCars[0].mainImage}
                  cardType="main"
                />
              </div>
              <Text fontType="sub2">
                🔽 아래에서 다른 차량도 확인해보세요! 🔽
              </Text>
            </S.MainCar>

            <S.SideCars>
              <S.SideCar>
                <Text fontColor="blue" fontWeight="bold" fontType="sub2">
                  {dealerChoiceCars[1] === null
                    ? `더 저렴한 차량이 없습니다.`
                    : `${
                        dealerChoiceCars[0].price - dealerChoiceCars[1].price
                      }만원 더 저렴한 옵션!`}
                </Text>
                {dealerChoiceCars[1] === null ? (
                  <S.Null $carType="less">
                    <img src={noCar} />
                    <Text fontType="sub2">더 저렴한 차량이 없습니다.</Text>
                  </S.Null>
                ) : (
                  <DealerChoiceCarCard
                    id={dealerChoiceCars[1].id}
                    registrationDate={dealerChoiceCars[1].registrationDate}
                    price={dealerChoiceCars[1].price}
                    name={dealerChoiceCars[1].name}
                    mileage={dealerChoiceCars[1].mileage}
                    mainImage={dealerChoiceCars[1].mainImage}
                    cardType="less"
                  />
                )}
              </S.SideCar>
              <S.SideCar>
                <Text fontColor="red" fontWeight="bold" fontType="sub2">
                  {dealerChoiceCars[2] === null
                    ? `더 비싼 차량이 없습니다.`
                    : `${
                        dealerChoiceCars[2].price - dealerChoiceCars[0].price
                      }만원만 더 보태면...!`}
                </Text>
                {dealerChoiceCars[2] === null ? (
                  <S.Null $carType="more">
                    <img src={noCar} />
                    <Text fontType="sub2">더 비싼 차량이 없습니다.</Text>
                  </S.Null>
                ) : (
                  <DealerChoiceCarCard
                    id={dealerChoiceCars[2].id}
                    registrationDate={dealerChoiceCars[2].registrationDate}
                    price={dealerChoiceCars[2].price}
                    name={dealerChoiceCars[2].name}
                    mileage={dealerChoiceCars[2].mileage}
                    mainImage={dealerChoiceCars[2].mainImage}
                    cardType="more"
                  />
                )}
              </S.SideCar>
            </S.SideCars>
          </S.DealerChoiceData>
        ) : (
          <S.LoadingContainer>
            <Text fontType="sub2">
              차자바가 고객님의 차량을 찾고 있습니다.
              <br /> 잠시만 기다려주세요.
            </Text>
            <S.LoadingImg src={Logo} />
            <S.LoadingDots>
              <S.Dot delay="0s" />
              <S.Dot delay="0.2s" />
              <S.Dot delay="0.4s" />
            </S.LoadingDots>
          </S.LoadingContainer>
        )}
      </S.DealerChoiceContainer>
    </>
  );
}
