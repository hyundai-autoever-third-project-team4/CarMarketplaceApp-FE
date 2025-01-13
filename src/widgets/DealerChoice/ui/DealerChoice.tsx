import { DealerChoiceForm } from "@/features/DealerChoiceForm";
import {
  DealerChoiceCarCard,
  DealerChoiceCar,
  getDealerChoiceCars,
} from "@/entities/Car";
import { Text } from "@/shared/ui/Text";
import * as S from "./DealerChoice.style";
import { useQuery } from "@tanstack/react-query";
import { FormValues } from "@/features/DealerChoiceForm";
import { useCallback, useState } from "react";

export function DealerChoice() {
  const [isFirst, setIsFirst] = useState<boolean>(true);
  const {
    data: dealerChoiceCars,
    isFetching,
    isError,
    refetch,
  } = useQuery<DealerChoiceCar[]>({
    queryKey: ["dealerChoiceCars"],
    queryFn: getDealerChoiceCars,
    enabled: !isFirst,
  });

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
              <DealerChoiceCarCard
                id={dealerChoiceCars[0].id}
                registrationDate={dealerChoiceCars[0].registrationDate}
                price={dealerChoiceCars[0].price}
                name={dealerChoiceCars[0].name}
                mileage={dealerChoiceCars[0].mileage}
                mainImage={dealerChoiceCars[0].mainImage}
                cardType="main"
              />
              <Text fontType="sub2">
                🔽 아래에서 다른 차량도 확인해보세요! 🔽
              </Text>
            </S.MainCar>
            <S.SideCars>
              <S.SideCar>
                <Text fontColor="blue" fontWeight="bold" fontType="sub2">
                  {`${
                    dealerChoiceCars[0].price - dealerChoiceCars[1].price
                  }만원 더 저렴한 옵션!`}
                </Text>
                <DealerChoiceCarCard
                  id={dealerChoiceCars[1].id}
                  registrationDate={dealerChoiceCars[1].registrationDate}
                  price={dealerChoiceCars[1].price}
                  name={dealerChoiceCars[1].name}
                  mileage={dealerChoiceCars[1].mileage}
                  mainImage={dealerChoiceCars[1].mainImage}
                  cardType="less"
                />
              </S.SideCar>
              <S.SideCar>
                <Text fontColor="red" fontWeight="bold" fontType="sub2">
                  {`${
                    dealerChoiceCars[2].price - dealerChoiceCars[0].price
                  }만원만 더 보태면...!`}
                </Text>
                <DealerChoiceCarCard
                  id={dealerChoiceCars[2].id}
                  registrationDate={dealerChoiceCars[2].registrationDate}
                  price={dealerChoiceCars[2].price}
                  name={dealerChoiceCars[2].name}
                  mileage={dealerChoiceCars[2].mileage}
                  mainImage={dealerChoiceCars[2].mainImage}
                  cardType="more"
                />
              </S.SideCar>
            </S.SideCars>
          </S.DealerChoiceData>
        ) : (
          <S.LoadingContainer>
            <Text fontType="sub2">
              차자바가 고객님의 차량을 찾고 있습니다.
              <br /> 잠시만 기다려주세요.
            </Text>
            <S.LoadingImg src="/src/shared/assets/chajava.svg" />
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
