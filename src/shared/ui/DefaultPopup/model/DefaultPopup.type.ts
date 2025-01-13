import { ReactNode } from "react";

export interface DefaultPopupProps {
  open: boolean;
  handleClose: () => void;
  content: ReactNode;
  isLoginPopup?: boolean;
  handleConfirmClick?: () => void;
}
