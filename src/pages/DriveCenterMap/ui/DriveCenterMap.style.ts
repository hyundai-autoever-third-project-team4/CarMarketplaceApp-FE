import theme from "@/shared/styles/theme";
import styled from "styled-components";

export const MapContainer = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 16px;
  background-color: ${theme.colors.lightGray};
  position: fixed;
  top: 64px;
`;

export const DriveCentersContainer = styled.div`
  width: 100%;
  padding: 0 16px;
  margin-top: 360px;
  margin-bottom: 48px;
`;
