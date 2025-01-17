import { CarDetailCircleInfo } from "@/widgets/CarDetailCircleInfo";
import { CarDetailImageSlide } from "@/widgets/CarDetailImageSlide";
import { CarDetailTopInfo } from "@/widgets/CarDetailTopInfo";
import * as S from "./CarDetail.style";
import { Text } from "@/shared/ui/Text";
import { CarDetailInfoBox } from "@/widgets/CarDetailInfoBox";
import { Button } from "@/shared/ui/Button";
import LikeImg from "@/shared/assets/heart.svg";
import { CarDetailOptionInfo } from "@/widgets/CarDetailOptionInfo";
import { mockCarOptions } from "@/widgets/CarDetailOptionInfo/model/mockData";
import { CarDetailReviewSlide } from "@/widgets/CarDetailReviewSlide";
import { useQuery } from "@tanstack/react-query";
import { CarDetailInfo, handleCarDetailInfo } from "@/pages/CarDetail/api/api";
import { useParams } from "react-router-dom";

export function CarDetail() {
  const { carId } = useParams();
  const {
    data: carDetailInfo,
    // isFetching,
    // isError,
    // refetch,
  } = useQuery<CarDetailInfo>({
    queryKey: ["carDetailInfo"],
    queryFn: async () => {
      return await handleCarDetailInfo(carId!);
    },
  });
  console.log(carDetailInfo, carId);
  return (
    <>
      <CarDetailImageSlide />
      <S.Container>
        <CarDetailTopInfo />
        <CarDetailCircleInfo />
        <S.Divider />
        <S.TextLeftMargin>
          <Text fontType="sub1">기본정보</Text>
        </S.TextLeftMargin>
        <CarDetailInfoBox />
        <S.Divider />
        <S.TextLeftMargin>
          <Text fontType="sub1">옵션정보</Text>
        </S.TextLeftMargin>
        <CarDetailOptionInfo carOptions={mockCarOptions} />
        <S.Divider />
        <S.TextLeftMargin>
          <Text fontType="subTitle">
            이 모델을 구매 하신 분들의 리뷰입니다.
          </Text>
        </S.TextLeftMargin>
        <CarDetailReviewSlide />
        <S.BottomArea>
          <S.LikeArea>
            <S.LikeImg src={LikeImg} />
          </S.LikeArea>
          <S.ButtonArea>
            <Button text="구매하기" size="full" />
          </S.ButtonArea>
        </S.BottomArea>
      </S.Container>
    </>
  );
}
