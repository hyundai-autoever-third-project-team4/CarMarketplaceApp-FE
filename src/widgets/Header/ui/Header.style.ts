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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25); /* 드롭 섀도우 */
`;

export const LogoImg = styled.img`
  margin-left: 10px;
  width: 44px;
  height: 44px;
  cursor: pointer;
`;

export const RightWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: 10px;
`;

export const SearchImg = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

export const ChatImg = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;
