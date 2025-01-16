import { CarCard } from "@/entities/Car";
import { CarCardProps } from "@/entities/Car";
import * as S from "./DriveCenterCars.style";
import { useMemo } from "react";
import { Text } from "@/shared/ui/Text";
import { UseFormSetValue } from "react-hook-form";

interface DriveCenterCarsProps {
  driveCenterCars: (CarCardProps & { model: string })[];
  carType: string;
  setValue: UseFormSetValue<any>;
}

export function DriveCenterCars({
  driveCenterCars,
  carType,
  setValue,
}: DriveCenterCarsProps) {
  const filtering = (car: CarCardProps & { model: string }) => {
    if (carType === "전체") return true;
    return car.model === carType;
  };

  const filteringCars = useMemo(() => {
    return driveCenterCars.filter(filtering);
  }, [carType, driveCenterCars]);

  const driveCenterCarClick = (car: CarCardProps) => {
    setValue("selectedCar", car);
  };

  return (
    <S.Container>
      {filteringCars.length !== 0 ? (
        filteringCars.map((car) => {
          return (
            <CarCard
              key={car.id}
              id={car.id}
              mainImage={car.mainImage}
              licensePlate={car.licensePlate}
              mileage={car.mileage}
              price={car.price}
              name={car.name}
              registrationDate={car.registrationDate}
              onClick={() => driveCenterCarClick(car)}
            />
          );
        })
      ) : (
        <div style={{ height: "40px", display: "flex", alignItems: "center" }}>
          <Text fontType="sub1" fontColor="gray">
            해당 차량이 시승소에 없습니다.
          </Text>
        </div>
      )}
    </S.Container>
  );
}
