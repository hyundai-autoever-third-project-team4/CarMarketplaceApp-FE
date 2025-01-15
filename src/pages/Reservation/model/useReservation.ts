import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

export const useReservation = () => {
  const { watch, handleSubmit, setValue, register } = useForm();
  const { state } = useLocation();

  if (state.type === "driveCenterMap") {
  }
  return { watch, handleSubmit, setValue, register, state };
};
