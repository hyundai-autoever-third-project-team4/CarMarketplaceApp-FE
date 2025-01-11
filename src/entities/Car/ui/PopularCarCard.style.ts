import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  aspect-ratio: 400 / 267;
  position: relative;
`;

export const BackGroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  object-fit: cover;
  /* opacity: 0.3; */
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px 16px;
`;

export const TopArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BottomArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RowBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
`;
