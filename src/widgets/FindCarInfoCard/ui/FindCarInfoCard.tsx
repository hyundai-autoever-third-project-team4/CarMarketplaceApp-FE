import { FindCarInfoCardProps } from "@/widgets/FindCarInfoCard/model/type";
import * as S from "./FindCarInfoCard.style";
import { Text } from "@/shared/ui/Text";

export function FindCarInfoCard({
  mainImage,
  licensePlate,
  carName,
  registrationDate,
  modelYear,
  mileage,
}: FindCarInfoCardProps) {
  return (
    <S.Container>
      <S.MainImg src={mainImage} />
      <S.TextContainer>
        <Text fontType="sub2" fontColor="darkGray">
          차량번호
        </Text>
        <Text fontType="sub2" fontWeight="regular">
          {licensePlate}
        </Text>
      </S.TextContainer>
      <S.TextContainer>
        <Text fontType="sub2" fontColor="darkGray">
          모델명
        </Text>
        <div style={{ width: "88%" }}>
          <Text fontType="sub2" fontWeight="regular">
            {carName}
          </Text>
        </div>
      </S.TextContainer>
      <S.TextContainer>
        <Text fontType="sub2" fontColor="darkGray">
          최초등록일
        </Text>
        <Text fontType="sub2" fontWeight="regular">
          {registrationDate}
        </Text>
      </S.TextContainer>
      <S.TextContainer>
        <Text fontType="sub2" fontColor="darkGray">
          연식
        </Text>
        <Text fontType="sub2" fontWeight="regular">
          {`${modelYear}년`}
        </Text>
      </S.TextContainer>
      <S.TextContainer>
        <Text fontType="sub2" fontColor="darkGray">
          주행거리
        </Text>
        <Text fontType="sub2" fontWeight="regular">
          {mileage}
        </Text>
      </S.TextContainer>
    </S.Container>
  );
}
