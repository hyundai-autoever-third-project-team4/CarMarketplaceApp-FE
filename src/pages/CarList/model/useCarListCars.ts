import { useLocation } from "react-router-dom";

export const useCarListCars = () => {
  const { state } = useLocation();

  return { state };
};
