import Logo from "@shared/assets/chajava.svg";
import { Text } from "../../Text";
import * as S from "./CustomLoading.style";
import { ReactNode } from "react";

interface CustomLoadingProps {
  text: ReactNode;
}

export const CustomLoading = ({ text }: CustomLoadingProps) => {
  return (
    <S.LoadingContainer>
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
