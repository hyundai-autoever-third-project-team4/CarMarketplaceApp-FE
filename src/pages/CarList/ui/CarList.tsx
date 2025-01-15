import { CarListComponent } from "@/widgets/CarListComponent";
import { useCarListCars } from "../model/useCarListCars";
import * as S from "./CarList.style";
import { Text } from "@/shared/ui/Text";
import filter from "@shared/assets/filter.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { NotFound } from "@/pages/NotFound";
import { CustomLoading } from "@/shared/ui/CustomLoading";

const SORT_ORDERS = [
  { name: "인기순", code: "famous" },
  { name: "높은 가격순", code: "price_high" },
  { name: "낮은 가격순", code: "price_low" },
  { name: "짧은 거리순", code: "distance_short" },
  { name: "최근 등록순", code: "recent" },
];

export function CarList() {
  const [sortOrder, setSortOrder] = useState("famous");
  const { carList, isLoading, isError } = useCarListCars(sortOrder);
  const navigate = useNavigate();

  if (isError) {
    return <NotFound />;
  }

  return (
    <S.Container>
      <S.Header>
        <S.SVGbox onClick={() => navigate("/search")}>
          <Text fontType="sub1">필터</Text>
          <img src={filter} width={20} height={20} />
        </S.SVGbox>
        <S.StyledSelect
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setSortOrder(e.target.value)
          }
        >
          {SORT_ORDERS.map((sel) => {
            return (
              <option key={sel.code} value={sel.code}>
                {sel.name}
              </option>
            );
          })}
        </S.StyledSelect>
      </S.Header>
      {isLoading || !carList ? (
        <S.LoadingContainer>
          <CustomLoading text={<></>} />
        </S.LoadingContainer>
      ) : (
        <CarListComponent carList={carList} />
      )}
    </S.Container>
  );
}
