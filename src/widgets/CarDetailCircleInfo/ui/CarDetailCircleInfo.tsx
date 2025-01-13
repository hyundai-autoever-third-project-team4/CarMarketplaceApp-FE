import { Text } from "@/shared/ui/Text";
import * as S from "./CarDetailCircleInfo.style";

export function CarDetailCircleInfo() {
  return (
    <S.Container>
      <S.InfoWrap>
        <S.InfoCircle>
          <Text fontSize={10} fontWeight="regular">
            3년
          </Text>
          <Text fontSize={10} fontWeight="regular">
            4개월
          </Text>
        </S.InfoCircle>
        <Text fontSize={10} fontWeight="regular">
          운행기간
        </Text>
      </S.InfoWrap>
      <S.InfoWrap>
        <S.InfoCircle>
          <Text fontSize={10} fontWeight="regular">
            가솔린
          </Text>
        </S.InfoCircle>
        <Text fontSize={10} fontWeight="regular">
          연료 종류
        </Text>
      </S.InfoWrap>
      <S.InfoWrap>
        <S.InfoCircle>
          <Text fontSize={10} fontWeight="regular">
            2335cc
          </Text>
        </S.InfoCircle>
        <Text fontSize={10} fontWeight="regular">
          배기량
        </Text>
      </S.InfoWrap>
      <S.InfoWrap>
        <S.InfoCircle>
          <Text fontSize={10} fontWeight="regular">
            1건
          </Text>
        </S.InfoCircle>
        <Text fontSize={10} fontWeight="regular">
          보험사고이력
        </Text>
      </S.InfoWrap>
    </S.Container>
  );
}
