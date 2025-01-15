import * as S from "./DriveCenter.style";
import { DriveCenterType } from "../model/type";
import { Text } from "@/shared/ui/Text";

type DriveCenterProps = Pick<
  DriveCenterType,
  "id" | "name" | "address" | "latitude" | "longitude"
> & {
  onClick: (id: number, lat: number, long: number) => void;
  isChecked: boolean;
};

export function DriveCenter({
  id,
  name,
  address,
  latitude,
  longitude,
  onClick,
  isChecked,
}: DriveCenterProps) {
  return (
    <S.Container
      $isChecked={isChecked}
      onClick={() => onClick(id, latitude, longitude)}
    >
      <Text fontType="sub1">{name}</Text>
      <Text fontType="sub2">{address}</Text>
      <Text fontType="sub2">운영시간: 평일 9:00 ~ 17:00</Text>
    </S.Container>
  );
}
