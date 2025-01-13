export interface FormValues {
  budget: number | null;
  carTypes: string[];
}

export interface FormProps {
  onClick: (data: FormValues) => void;
}
