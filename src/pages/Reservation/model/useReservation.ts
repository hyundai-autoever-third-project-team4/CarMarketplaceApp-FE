import { getDriveCenterCars } from "@/entities/DriverCenter/api/api";
import { DefaultError, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { CarCardProps } from "@/entities/Car";
import {
  getCarReservationList,
  CarReservationList,
} from "@/entities/Reservation";

export interface ReservationFormValue {
  driveCenter: number;
  carType: string;
  selectedCar: CarCardProps | null;
  date: Date | null;
  time: string | null;
}

const RESERVATION_FORM_VALUE = {
  driveCenter: 1,
  carType: "전체",
  selectedCar: null,
  date: null,
  time: null,
};

export const useReservation = () => {
  const { handleSubmit, setValue, register, control } =
    useForm<ReservationFormValue>({
      defaultValues: RESERVATION_FORM_VALUE,
    });

  const driveCenter = useWatch({ control, name: "driveCenter" });
  const carType = useWatch({ control, name: "carType" });
  const selectedCar = useWatch({ control, name: "selectedCar" });
  const selcetedDate = useWatch({ control, name: "date" });
  const selcetedTime = useWatch({ control, name: "time" });

  const { state } = useLocation();

  const { data, isLoading, isError } = useQuery<any>({
    queryKey: ["driveCenterCars", driveCenter],
    queryFn: () => getDriveCenterCars(driveCenter),
  });
  const driveCenterCars = data?.marketplaceCarSummaryDtos;

  const {
    data: carReservationList,
    isLoading: reservationLoading,
    isError: reservationError,
  } = useQuery<CarReservationList, DefaultError, { [key: string]: boolean }>({
    queryKey: ["carReservationList", selectedCar?.id],
    queryFn: () => getCarReservationList(selectedCar?.id),
    enabled: selectedCar !== null,
    select: (data) => data.marketplaceCarAvailability,
  });

  useEffect(() => {
    if (state?.type === "driveCenterMap" && state?.id) {
      setValue("driveCenter", state.id);
    }
  }, [state]);

  useEffect(() => {
    setValue("selectedCar", null);
    setValue("date", null);
    setValue("time", null);
  }, [carType, driveCenter]);

  return {
    driveCenter,
    carType,
    selectedCar,
    selcetedDate,
    selcetedTime,
    handleSubmit,
    setValue,
    register,
    driveCenterCars,
    isLoading,
    isError,
    carReservationList,
    reservationLoading,
    reservationError,
  };
};
