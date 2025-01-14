import { getCarListCars } from "@/entities/Car/CarListCard";
import { useSearchFormStore } from "@/features/SearchForm";
import { useQuery } from "@tanstack/react-query";

const CAR_LIST_QUERY_KEY = "carListCars";

export const useCarListCars = (sortOrder: string) => {
  const { searchForm } = useSearchFormStore();

  const params = {
    carType: searchForm?.carType.join(","),
    colorType: searchForm?.colorType.join(","),
    fuelType: searchForm?.fuelType.join(","),
    maxMileage: searchForm?.maxMileage,
    minMileage: searchForm?.minMileage,
    maxPrice: searchForm?.maxPrice,
    minPrice: searchForm?.minPrice,
    minModelYear: searchForm?.minModelYear,
    maxModelYear: searchForm?.maxModelYear,
    model: searchForm?.model.join(","),
    optionIds: searchForm?.optionIds.join(","),
    sortOrder: sortOrder,
  };

  const {
    data: carList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [CAR_LIST_QUERY_KEY, searchForm, sortOrder],
    queryFn: () => getCarListCars(params),
  });

  return { carList, isLoading, isError };
};
