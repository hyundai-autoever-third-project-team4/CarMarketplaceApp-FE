import { Text } from "@/shared/ui/Text";
import * as S from "./CarDetailCircleInfo.style";

interface CarDetailCircleInfoProps {
  fuelType: string;
  engineCapacity: number;
  registrationDate: string;
  marketplaceRegistrationDate: string;
}

export function CarDetailCircleInfo({
  fuelType,
  engineCapacity,
  registrationDate,
  marketplaceRegistrationDate,
}: CarDetailCircleInfoProps) {
  const calculateDuration = (
    startDateString: string,
    endDateString: string
  ) => {
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();

    // 월이 음수인 경우 조정
    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months };
  };

  return (
    <S.Container>
      <S.InfoWrap>
        <S.InfoCircle>
          <Text fontSize={10} fontWeight="regular">
            {calculateDuration(registrationDate, marketplaceRegistrationDate)
              .years + "년"}
          </Text>
          <Text fontSize={10} fontWeight="regular">
            {calculateDuration(registrationDate, marketplaceRegistrationDate)
              .months + "개월"}
          </Text>
        </S.InfoCircle>
        <Text fontSize={10} fontWeight="regular">
          운행기간
        </Text>
      </S.InfoWrap>
      <S.InfoWrap>
        <S.InfoCircle>
          <Text fontSize={10} fontWeight="regular">
            {fuelType}
          </Text>
        </S.InfoCircle>
        <Text fontSize={10} fontWeight="regular">
          연료 종류
        </Text>
      </S.InfoWrap>
      <S.InfoWrap>
        <S.InfoCircle>
          <Text fontSize={10} fontWeight="regular">
            {engineCapacity}cc
          </Text>
        </S.InfoCircle>
        <Text fontSize={10} fontWeight="regular">
          배기량
        </Text>
      </S.InfoWrap>
      <S.InfoWrap>
        <S.InfoCircle>
          <Text fontSize={10} fontWeight="regular">
            0건
          </Text>
        </S.InfoCircle>
        <Text fontSize={10} fontWeight="regular">
          보험사고이력
        </Text>
      </S.InfoWrap>
    </S.Container>
  );
}
