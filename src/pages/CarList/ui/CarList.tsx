import { CarListComponent } from "@/widgets/CarListComponent";
import { useCarListCars } from "../model/useCarListCars";

export function CarList() {
  const { state } = useCarListCars();

  return (
    <>
      <CarListComponent />
    </>
  );
}
