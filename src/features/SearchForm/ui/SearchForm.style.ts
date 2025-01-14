import theme from "@/shared/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 16px;
  height: 100%;
  min-height: calc(100vh - 128px);
  padding-bottom: 64px;

  .css-1jq9w0k-JoySlider-track {
    background-color: ${theme.colors.primary4};
  }
  .css-hayzob-JoySlider-thumb::before {
    border-color: ${theme.colors.primary4};
  }
  .css-qildnp-JoySlider-mark {
    background-color: ${theme.colors.lightGray};
  }
  .css-mrqxav-JoySlider-mark {
    background-color: ${theme.colors.lightGray};
  }
  .css-ea941n-JoySlider-mark {
    background-color: ${theme.colors.lightGray};
  }
`;

export const TitleArea = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  border-top: 2px solid ${theme.colors.lightGray};
`;

export const RadioButtonWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 8px 12px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

export const MileageStatus = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const ModelYearWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

export const ModelYearSelect = styled.select`
  width: 100px;
  height: 32px;
  padding: 0 4px;
  font-size: ${theme.fontSizes.sub1};
`;
