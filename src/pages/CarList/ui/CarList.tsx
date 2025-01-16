import { CarListComponent } from "@/widgets/CarListComponent";
import { useCarListCars } from "../model/useCarListCars";
import * as S from "./CarList.style";
import { Text } from "@/shared/ui/Text";
import filter from "@shared/assets/filter.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { CustomLoading } from "@/shared/ui/CustomLoading";

const SORT_ORDERS = [
  { name: "인기순", code: "famous" },
  { name: "높은 가격순", code: "price_high" },
  { name: "낮은 가격순", code: "price_low" },
  { name: "짧은 주행거리순", code: "distance_short" },
  { name: "최근 연식순", code: "recent" },
];

export function CarList() {
  const [sortOrder, setSortOrder] = useState("인기순");
  const { carList, isLoading, isError, fetchNextPage, hasNextPage } =
    useCarListCars(sortOrder);
  const navigate = useNavigate();
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasNextPage || !observerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(observerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [fetchNextPage, hasNextPage]);

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
              <option key={sel.name} value={sel.name}>
                {sel.name}
              </option>
            );
          })}
        </S.StyledSelect>
      </S.Header>
      {isLoading && carList.length === 0 ? (
        // 초기 로딩 상태
        <S.LoadingContainer>
          <CustomLoading text="차량 목록을 불러오는 중입니다..." />
        </S.LoadingContainer>
      ) : isError || (carList.length === 0 && !isLoading) ? (
        // 빈 결과 상태
        <S.LoadingContainer>
          해당 조건이 부합하는 차량이 없습니다.
        </S.LoadingContainer>
      ) : (
        <>
          <CarListComponent carList={carList} />
          <div ref={observerRef} />
          <div
            style={{
              width: "100%",
              height: hasNextPage ? "300px" : "0",
              display: hasNextPage ? "flex" : "none",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {hasNextPage && <CustomLoading text={<></>} />}
          </div>
        </>
      )}
    </S.Container>
  );
}
