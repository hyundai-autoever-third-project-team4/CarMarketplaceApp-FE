type ButtonType = "small" | "big" | "full";

export interface ButtonProps {
  text: string;
  size: ButtonType;
  buttonClick: () => void;
}
