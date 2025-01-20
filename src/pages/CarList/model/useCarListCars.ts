import { getCarListCars } from "@/entities/Car/CarListCard";
import { useSearchFormStore } from "@/features/SearchForm";
import { MODELS } from "@/features/SearchForm/model/model";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

const CAR_LIST_QUERY_KEY = "carListCars";

export const useCarListCars = (sortOrder: string) => {
  const { searchForm, param } = useSearchFormStore();
  const queryClient = useQueryClient();

  const params: any = {
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

  if (param !== "") {
    params.licensePlate = param;
    if (MODELS.some((model) => param === model)) params.models += "," + param;
  }

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

  const prefetchNextPage = () => {
    const nextPage = data?.pages.length || 0;
    if (hasNextPage) {
      const updatedParams = { ...params, page: nextPage };
      queryClient.prefetchQuery({
        queryKey: [CAR_LIST_QUERY_KEY, searchForm, sortOrder, nextPage],
        queryFn: () => getCarListCars(updatedParams),
      });
    }
  };

  useEffect(() => {
    if (data) {
      prefetchNextPage();
    }
  }, [data]);

  return {
    carList: data?.pages.flat() || [],
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
  };
};
