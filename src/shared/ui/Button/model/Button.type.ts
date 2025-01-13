type ButtonType = "small" | "big" | "full" | "login";

export interface ButtonProps {
  text: string;
  size: ButtonType;
  buttonClick?: () => void;
}
