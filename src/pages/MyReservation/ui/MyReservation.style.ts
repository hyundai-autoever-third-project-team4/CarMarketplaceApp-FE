import theme from "@/shared/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
`;

export const Title = styled.div`
  margin-bottom: 20px;
`;

export const MarginBottom = styled.div`
  margin: 16px 0;
  border-bottom: 2px solid ${theme.colors.lightGray};
`;

export const NoDataContainer = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NoDataImg = styled.img`
  width: 78px;
  height: 78px;
`;

export const NoDataSubText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 18px;
`;
