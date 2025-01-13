import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { DealerChoiceCar, getDealerChoiceCars } from "@/entities/Car";

type Nullable = DealerChoiceCar | null;
type DealerChoice = [DealerChoiceCar, Nullable, Nullable];

export const useDealerChoiceCars = () => {
  const [isFirst, setIsFirst] = useState<boolean>(true);

  const {
    data: dealerChoiceCars,
    isFetching,
    isError,
    refetch,
  } = useQuery<DealerChoice>({
    queryKey: ["dealerChoiceCars"],
    queryFn: getDealerChoiceCars,
    enabled: !isFirst,
  });

  return {
    dealerChoiceCars,
    isFetching,
    isError,
    refetch,
    isFirst,
    setIsFirst,
  };
};
