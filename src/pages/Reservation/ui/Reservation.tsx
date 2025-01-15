import { Button } from "@/shared/ui/Button";
import * as S from "./Reservation.style";
import { useReservation } from "../model/useReservation";
import { DRIVE_CENTERS } from "@/entities/DriverCenter";
import { MODELS } from "@/features/SearchForm/model/model";
import { Text } from "@/shared/ui/Text";

export function Reservation() {
  const { watch, handleSubmit, setValue, register, state } = useReservation();
  console.log(state);
  return (
    <>
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
            <Text fontType="subTitle">시승소 찾기</Text>
            <S.StyledSelect>
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
      </S.Container>

      <div style={{ position: "fixed", width: "100%", bottom: "64px" }}>
        <Button size="full" text="예약 완료" />
      </div>
    </>
  );
}
