import { Text } from "@/shared/ui/Text";
import * as S from "./CarDetailInfoBox.style";

const carDetails = [
  { label: "최초등록일", value: "2021.07.15" },
  { label: "주행거리", value: "16,510km" },
  { label: "연료", value: "하이브리드" },
  { label: "배기량", value: "2,356cc" },
  { label: "차종", value: "승용" },
  { label: "구동방식", value: "2WD" },
  { label: "차량번호", value: "168구 9541" },
  { label: "연식", value: "2021" },
];

export function CarDetailInfoBox() {
  return (
    <S.Container>
      <S.ContainerBackground>
        {carDetails.map((detail, index) => (
          <S.CarInfoWrap key={index}>
            <S.CarInfoArea>
              <Text fontType="sub1" fontWeight="light">
                {detail.label}
              </Text>
              <Text fontType="sub1" fontWeight="medium">
                {detail.value}
              </Text>
            </S.CarInfoArea>
          </S.CarInfoWrap>
        ))}
      </S.ContainerBackground>
    </S.Container>
  );
}
