import {
  ThemeFontSize,
  ThemeFontWeight,
  ThemeColor,
} from "@/shared/styles/theme.type";

export interface TextProps {
  // 폰트 타입에 따라 설정하기
  fontType?: ThemeFontSize;

  // 폰트 타입 설정 없이 커스텀으로 설정하고 싶은 경우
  fontSize?: number;
  fontColor?: ThemeColor;
  fontWeight?: ThemeFontWeight;
  children: string;
}
