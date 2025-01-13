import { CarDetailCircleInfo } from "@/widgets/CarDetailCircleInfo";
import { CarDetailImageSlide } from "@/widgets/CarDetailImageSlide";
import { CarDetailTopInfo } from "@/widgets/CarDetailTopInfo";
import * as S from "./CarDetail.style";
import { Text } from "@/shared/ui/Text";
import { CarDetailInfoBox } from "@/widgets/CarDetailInfoBox";
import { Button } from "@/shared/ui/Button";
import LikeImg from "@/shared/assets/heart.svg";

export function CarDetail() {
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
        <S.BottomArea>
          <S.LikeArea>
            <S.LikeImg src={LikeImg} />
          </S.LikeArea>
          <Button text="구매하기" size="full" />
        </S.BottomArea>
      </S.Container>
    </>
  );
}
