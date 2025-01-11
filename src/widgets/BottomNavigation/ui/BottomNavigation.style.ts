import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  min-width: 300px;
  position: fixed; //아래에 고정
  bottom: 0px;
  height: 64px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-top: 1px solid #dbdbdb;
`;

export const MenuWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuBox = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuImg = styled.div`
  margin-bottom: 4px;
  cursor: pointer;
`;
