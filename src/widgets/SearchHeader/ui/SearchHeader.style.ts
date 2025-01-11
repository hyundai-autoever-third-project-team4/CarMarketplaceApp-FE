import theme from "@/shared/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  min-width: 300px;
  position: fixed; //위에 고정
  top: 0px;
  height: 64px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  box-shadow: 0 2px 4px rgb(140, 85, 53); /* 드롭 섀도우 */
`;

export const BackImg = styled.img`
  margin-left: 6px;
  width: 12px;
  height: 20px;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  padding: 6px 0px;
  width: 100%;
  border: none;
  font-size: ${theme.fontSizes.sub1};
  color: ${theme.colors.darkGray};
`;

export const LeftWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  margin-right: 10px;
`;

export const SearchImg = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 6px;
  cursor: pointer;
`;
