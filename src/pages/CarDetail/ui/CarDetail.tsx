import { CarDetailCircleInfo } from "@/widgets/CarDetailCircleInfo";
import { CarDetailImageSlide } from "@/widgets/CarDetailImageSlide";
import { CarDetailTopInfo } from "@/widgets/CarDetailTopInfo";
import * as S from "./CarDetail.style";
import { Text } from "@/shared/ui/Text";
import { CarDetailInfoBox } from "@/widgets/CarDetailInfoBox";
import { Button } from "@/shared/ui/Button";
import LikeImg from "@/shared/assets/heart.svg";
import { CarDetailOptionInfo } from "@/widgets/CarDetailOptionInfo";
import { CarDetailReviewSlide } from "@/widgets/CarDetailReviewSlide";
import { useQuery } from "@tanstack/react-query";
import { CarDetailInfo, handleCarDetailInfo } from "@/pages/CarDetail/api/api";
import { useParams } from "react-router-dom";
import { CustomLoading } from "@/shared/ui/CustomLoading";
import { authInstance } from "@/shared/api/axiosInstance";
import { DefaultPopup } from "@/shared/ui/DefaultPopup";
import { useState } from "react";

export function CarDetail() {
  const { carId } = useParams();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const {
    data: carDetailInfo,
    isLoading,
    isError,
    // refetch,
  } = useQuery<CarDetailInfo>({
    queryKey: ["carDetailInfo"],
    queryFn: () => handleCarDetailInfo(carId!),
    staleTime: 0,
  });

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const handleHeartClick = async () => {
    if (!localStorage.getItem("access_token")) {
      setIsPopupOpen(true);
    } else {
      try {
        await authInstance.post(`/like/${carId}`);
      } catch (error) {
        console.error("Like click failed:", error);
        throw error;
      }
    }
  };

  return (
    <>
      {isLoading || isError || !carDetailInfo ? (
        <CustomLoading text={"로딩 중입니다..."} />
      ) : (
        <>
          <CarDetailImageSlide
            carImages={carDetailInfo.marketplaceCarImageDtos}
            mainImg={carDetailInfo.mainImage}
          />
          <S.Container>
            <CarDetailTopInfo
              name={carDetailInfo.carDetails.name}
              registrationDate={carDetailInfo.carDetails.registrationDate}
              mileage={carDetailInfo.carDetails.mileage}
              testDriveCenterName={carDetailInfo.testDriveCenterName}
              price={carDetailInfo.price}
            />
            <CarDetailCircleInfo
              fuelType={carDetailInfo.carDetails.fuelType}
              engineCapacity={carDetailInfo.carDetails.engineCapacity}
              registrationDate={carDetailInfo.carDetails.registrationDate}
              marketplaceRegistrationDate={
                carDetailInfo.marketplaceRegistrationDate
              }
            />
            <S.Divider />
            <S.TextLeftMargin>
              <Text fontType="sub1">기본정보</Text>
            </S.TextLeftMargin>
            <CarDetailInfoBox
              registrationDate={carDetailInfo.carDetails.registrationDate}
              mileage={carDetailInfo.carDetails.mileage}
              fuelType={carDetailInfo.carDetails.fuelType}
              engineCapacity={carDetailInfo.carDetails.engineCapacity}
              vehicleType={carDetailInfo.carDetails.vehicleType}
              driveType={carDetailInfo.carDetails.driveType}
              licensePlate={carDetailInfo.carDetails.licensePlate}
              modelYear={carDetailInfo.carDetails.modelYear}
            />
            <S.Divider />
            <S.TextLeftMargin>
              <Text fontType="sub1">옵션정보</Text>
            </S.TextLeftMargin>
            <CarDetailOptionInfo
              carOptions={carDetailInfo.marketplaceCarOptionInfoDtos}
            />
            <S.Divider />
            <S.TextLeftMargin>
              <Text fontType="subTitle">
                이 모델을 구매 하신 분들의 리뷰입니다.
              </Text>
            </S.TextLeftMargin>
            <CarDetailReviewSlide />
            <S.BottomArea>
              <S.LikeArea onClick={handleHeartClick}>
                <S.LikeImg src={LikeImg} />
              </S.LikeArea>
              <S.ButtonArea>
                <Button
                  disable={carDetailInfo.status !== "AVAILABLE_FOR_PURCHASE"}
                  text="구매하기"
                  size="full"
                />
              </S.ButtonArea>
            </S.BottomArea>
          </S.Container>
          <DefaultPopup
            open={isPopupOpen}
            handleClose={handlePopupClose}
            content={"로그인 후 가능합니다."}
          />
        </>
      )}
    </>
  );
}
