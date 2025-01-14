import styled from "styled-components";
import { ColorCheckProps } from "../model/type";
import { StyleProps } from "@/shared/utils/types/utilityType";

// CheckBox 스타일
export const StyledCheckBox = styled.input.attrs({ type: "checkbox" })`
  display: none; /* 숨김 처리 */
`;

// Label 스타일
export const Label = styled.label`
  cursor: pointer; /* 클릭 가능 표시 */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 이미지 스타일
type ColorImg = StyleProps<Pick<ColorCheckProps, "isChecked">>;
export const ColorImg = styled.img<ColorImg>`
  width: 60px;
  height: 60px;
  opacity: ${({ $isChecked }) => ($isChecked ? "1" : "0.2")};
  margin-bottom: 8px;
`;

// 전체 컨테이너 스타일
export const Container = styled.div`
  display: inline-block;
  position: relative;
  margin-bottom: 8px;
`;
