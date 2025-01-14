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
  margin: 24px 0;
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

export const CarImg = styled.img`
  height: auto; /* 자동으로 높이를 조정 */
  aspect-ratio: 380 / 243; /* 비율을 380:254로 설정 */
  width: 100%;
  margin-bottom: 12px;
`;

export const TextArea = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  width: 100%;
  gap: 4px;
  margin-bottom: 20px;
`;

export const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

export const RejectButton = styled.button`
  padding: 6px;
  border: none;
  border-radius: 4px;
  background-color: ${theme.colors.lightGray};
  width: 100%;
`;

export const ApproveButton = styled.button`
  padding: 6px;
  border: none;
  border-radius: 4px;
  background-color: ${theme.colors.blue};
  width: 100%;
`;
