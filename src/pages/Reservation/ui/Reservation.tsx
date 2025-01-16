import { Button } from "@/shared/ui/Button";
import * as S from "./Reservation.style";
import { useReservation } from "../model/useReservation";
import { DRIVE_CENTERS } from "@/entities/DriverCenter";
import { MODELS } from "@/features/SearchForm/model/model";
import { Text } from "@/shared/ui/Text";
import { ReservationFormValue } from "../model/useReservation";
import { DriveCenterCars } from "@/widgets/DriveCenterCars";
import { CarCard } from "@/entities/Car";
import { CustomLoading } from "@/shared/ui/CustomLoading";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useCallback } from "react";

export function Reservation() {
  const {
    driveCenter,
    carType,
    selectedCar,
    selcetedDate,
    selcetedTime,
    handleSubmit,
    setValue,
    // register,
    driveCenterCars,
    isLoading,
    isError,
    carReservationList,
    reservationLoading,
    reservationError,
  } = useReservation();

  const onSubmit = (data: ReservationFormValue) => {
    console.log(data);
  };

  // 특정 날짜 비활성화
  const shouldDisableDate = useCallback(
    (date: any) => {
      const today = new Date();
      const twoWeeksLater = new Date();
      twoWeeksLater.setDate(today.getDate() + 14);

      const formattedDate = `${date.$d.getFullYear()}-${String(
        date.$d.getMonth() + 1
      ).padStart(2, "0")}-${String(date.$d.getDate()).padStart(2, "0")}`;

      if (carReservationList) {
        if (carReservationList[formattedDate] === false) {
          return true;
        }
      }

      return date < today || date > twoWeeksLater;
    },
    [carReservationList]
  );

  if (isError) {
    return <>에러임임.</>;
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Container>
          <S.FormContainer>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <S.CircleNumber>
                  <Text fontType="sub1" fontColor="white">
                    1
                  </Text>
                </S.CircleNumber>
                <Text fontType="subTitle">시승소 찾기</Text>
              </div>
              <S.StyledSelect
                onChange={(e) => {
                  setValue("driveCenter", Number(e.target.value));
                }}
                value={driveCenter}
              >
                {DRIVE_CENTERS.map((center) => {
                  return (
                    <option key={center.id} value={center.id}>
                      {center.name}
                    </option>
                  );
                })}
              </S.StyledSelect>
            </div>
          </S.FormContainer>
          <S.FormContainer>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <S.CircleNumber>
                  <Text fontType="sub1" fontColor="white">
                    2
                  </Text>
                </S.CircleNumber>
                <Text fontType="subTitle">시승할 차 선택</Text>
              </div>
              <S.StyledSelect
                onChange={(e) => {
                  setValue("carType", e.target.value);
                }}
              >
                <option value="전체">전체</option>
                {MODELS.map((model) => {
                  return (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  );
                })}
              </S.StyledSelect>
            </div>
            {isLoading ? (
              <div
                style={{
                  height: "300px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <CustomLoading text={`시승소의 차량을 검색 중입니다.`} />
              </div>
            ) : selectedCar === null ? (
              <>
                <DriveCenterCars
                  carType={carType}
                  setValue={setValue}
                  driveCenterCars={driveCenterCars}
                />
              </>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginTop: "16px",
                }}
              >
                <Text fontType="sub1" fontWeight="bold">
                  선택된 차량
                </Text>
                <CarCard
                  id={selectedCar.id}
                  mainImage={selectedCar.mainImage}
                  name={selectedCar.name}
                  registrationDate={selectedCar.registrationDate}
                  mileage={selectedCar.mileage}
                  licensePlate={selectedCar.licensePlate}
                  price={selectedCar.price}
                />
              </div>
            )}
          </S.FormContainer>

          {selectedCar && (
            <S.FormContainer>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <S.CircleNumber>
                    <Text fontType="sub1" fontColor="white">
                      3
                    </Text>
                  </S.CircleNumber>
                  <Text fontType="subTitle">시승 날짜 선택</Text>
                </div>
              </div>

              <S.CalendarContainer>
                {reservationError ? (
                  <Text fontType="sub1" fontColor="gray">
                    예약 일정을 불러오는 데 실패했습니다.
                  </Text>
                ) : reservationLoading ? (
                  <CustomLoading text="" />
                ) : (
                  <DateCalendar
                    // label="Select a date"
                    shouldDisableDate={shouldDisableDate}
                    onChange={(newValue: any) => setValue("date", newValue.$d)}
                  />
                )}
              </S.CalendarContainer>

              <div
                style={{ marginTop: "16px", width: "100%", padding: "0 16px" }}
              ></div>
              <S.StyledSelect
                onChange={(e) => {
                  setValue("time", e.target.value);
                }}
                disabled={selcetedDate === null}
              >
                {Array.from({ length: 17 }).map((_, index) => {
                  const hours = Math.floor((9 * 60 + index * 30) / 60);
                  const minutes = (index * 30) % 60;
                  const formattedTime = `${String(hours).padStart(
                    2,
                    "0"
                  )}:${String(minutes).padStart(2, "0")}`;
                  return (
                    <option key={formattedTime} value={formattedTime}>
                      {formattedTime}
                    </option>
                  );
                })}
              </S.StyledSelect>
            </S.FormContainer>
          )}
        </S.Container>

        <div
          style={{
            position: "fixed",
            width: "100%",
            bottom: "64px",
            maxWidth: "600px",
          }}
        >
          <Button
            disable={selcetedTime === null}
            size="full"
            text="예약 완료"
          />
        </div>
      </form>
    </>
  );
}
