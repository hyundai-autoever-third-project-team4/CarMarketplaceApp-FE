import { ReactNode } from "react";

export interface DefaultModalProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  children: ReactNode;
}
