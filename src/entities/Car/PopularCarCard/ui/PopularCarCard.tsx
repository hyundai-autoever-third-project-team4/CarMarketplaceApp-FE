import DynamicSVG from "@/shared/ui/DynamicSVG/DynamicSVG";
import { PopularCarCardProps } from "../model/type";
import * as S from "./PopularCarCard.style";
import { Text } from "@/shared/ui/Text";
import likeImg from "@/shared/assets/filled_heart.svg";
import theme from "@/shared/styles/theme";

export function PopularCarCard({
  id,
  mainImage,
  like,
  name,
  index,
}: PopularCarCardProps) {
  return (
    <S.Container>
      <S.BackGroundImage src={mainImage} alt="자동차" />
      <S.Wrapper>
        <S.TopArea>
          <Text fontType="sub1">{`Top ${index}`}</Text>
          <S.RowBox>
            <DynamicSVG
              svgUrl={likeImg}
              width={24}
              height={24}
              color={theme.colors.red}
            />
            <Text fontType="sub1">{like}</Text>
          </S.RowBox>
        </S.TopArea>
        <S.BottomArea>
          <Text fontType="sub1">{name}</Text>
        </S.BottomArea>
      </S.Wrapper>
    </S.Container>
  );
}
