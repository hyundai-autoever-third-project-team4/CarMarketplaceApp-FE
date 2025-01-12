import { PopularCarSlide } from "@/widgets/PopularCarSlide";
import * as S from "./Home.style";
import { Text } from "@/shared/ui/Text";

export function Home() {
  return (
    <>
      <S.TitleArea>
        <Text fontType="title">인기 차량</Text>
      </S.TitleArea>
      <PopularCarSlide />
    </>
  );
}
