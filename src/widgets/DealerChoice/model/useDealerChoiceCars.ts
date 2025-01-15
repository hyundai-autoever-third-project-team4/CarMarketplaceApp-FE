import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { DealerChoiceCar, getDealerChoiceCars } from "@/entities/Car";
import { useDealerFormStore } from "@/features/DealerChoiceForm/model/dealerChoiceStore";

type Nullable = DealerChoiceCar | null;
type DealerChoice = {
  recommandResults: [DealerChoiceCar, Nullable, Nullable];
};

export const useDealerChoiceCars = () => {
  const [isFirst, setIsFirst] = useState<boolean>(true);
  const { dealerForm, setDealerForm } = useDealerFormStore();
  const [selectedCar, setSelectedCar] = useState<string>("null");

  const requestBody = {
    carId: selectedCar,
    vehicleType: dealerForm.carTypes,
    budget: dealerForm.budget,
  };
  const { data, isFetching, isError, refetch } = useQuery<DealerChoice>({
    queryKey: ["dealerChoiceCars", dealerForm, selectedCar],
    queryFn: () => getDealerChoiceCars(requestBody),
    enabled: !isFirst,
    // select: (data) => data.recommandResults,
  });
  const dealerChoiceCars = data?.recommandResults;

  return {
    dealerChoiceCars,
    isFetching,
    isError,
    refetch,
    isFirst,
    setIsFirst,
    setDealerForm,
    setSelectedCar,
    dealerForm,
  };
};
