import Logo from "@shared/assets/chajava.svg";
import { Text } from "../../Text";
import * as S from "./CustomLoading.style";
import { ReactNode } from "react";

interface CustomLoadingProps {
  text: ReactNode;
  middle?: boolean;
}

export const CustomLoading = ({ text, middle = false }: CustomLoadingProps) => {
  return (
    <S.LoadingContainer $middle={middle}>
      <Text fontType="sub2">{text}</Text>
      <S.LoadingImg src={Logo} />
      <S.LoadingDots>
        <S.Dot delay="0s" />
        <S.Dot delay="0.2s" />
        <S.Dot delay="0.4s" />
      </S.LoadingDots>
    </S.LoadingContainer>
  );
};
