import { PopularCarSlide } from "@/widgets/PopularCarSlide";
import { DealerChoice } from "@/widgets/DealerChoice";
import * as S from "./Home.style";
import { Text } from "@/shared/ui/Text";

export function Home() {
  return (
    <S.Container>
      <S.TitleArea>
        <Text fontType="title">인기 차량</Text>
      </S.TitleArea>
      <PopularCarSlide />
      <S.TitleArea>
        <Text fontType="title">이 차 어때?</Text>
      </S.TitleArea>
      <DealerChoice />
    </S.Container>
  );
}
