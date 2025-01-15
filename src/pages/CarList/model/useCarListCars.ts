import { getCarListCars } from "@/entities/Car/CarListCard";
import { useSearchFormStore } from "@/features/SearchForm";
import { useInfiniteQuery } from "@tanstack/react-query";

const CAR_LIST_QUERY_KEY = "carListCars";

export const useCarListCars = (sortOrder: string) => {
  const { searchForm } = useSearchFormStore();

  const params = {
    carTypes: searchForm?.carType.join(","),
    colorTypes: searchForm?.colorType.join(","),
    fuelTypes: searchForm?.fuelType.join(","),
    maxMileage: searchForm?.maxMileage,
    minMileage: searchForm?.minMileage,
    maxPrice:
      searchForm?.maxPrice === 8000
        ? 10000 * 10000
        : searchForm?.maxPrice * 10000,
    minPrice: searchForm?.minPrice * 10000,
    minModelYear: searchForm?.minModelYear,
    maxModelYear: searchForm?.maxModelYear,
    models: searchForm?.model.join(","),
    optionIds: searchForm?.optionIds.join(","),
    sortOrder: sortOrder,
    // page: page,
  };

  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: [CAR_LIST_QUERY_KEY, searchForm, sortOrder],
      queryFn: ({ pageParam = 0 }) =>
        getCarListCars({ ...params, page: pageParam }),
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length ? allPages.length : undefined;
      },
      initialPageParam: 0,
    });

  return {
    carList: data?.pages.flat() || [],
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
  };
};
