import { Text } from "@/shared/ui/Text";
import * as S from "./CarDetailInfoBox.style";

interface CarDetailInfoBoxProps {
  registrationDate: string;
  mileage: number;
  fuelType: string;
  engineCapacity: number;
  vehicleType: string;
  driveType: string;
  licensePlate: string;
  modelYear: number;
}

export function CarDetailInfoBox({
  registrationDate,
  mileage,
  fuelType,
  engineCapacity,
  vehicleType,
  driveType,
  licensePlate,
  modelYear,
}: CarDetailInfoBoxProps) {
  const carDetails = [
    { label: "최초등록일", value: registrationDate },
    { label: "주행거리", value: `${mileage.toLocaleString()}km` }, // 천 단위로 포맷
    { label: "연료", value: fuelType },
    { label: "배기량", value: `${engineCapacity}cc` },
    { label: "차종", value: vehicleType },
    { label: "구동방식", value: driveType },
    { label: "차량번호", value: licensePlate },
    { label: "연식", value: `${modelYear}` },
  ];

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
