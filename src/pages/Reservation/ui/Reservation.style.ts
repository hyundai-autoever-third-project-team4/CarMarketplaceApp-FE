import theme from "@/shared/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 176px);
  padding: 16px;
  background-color: ${theme.colors.lightGray};
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 48px;
`;

export const FormContainer = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  padding: 16px 12px;
`;

export const StyledSelect = styled.select`
  width: 136px;
  height: 28px;
  padding: 0 4px;
  font-size: ${theme.fontSizes.sub2};
`;

export const CircleNumber = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background-color: ${theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CalendarContainer = styled.div`
  width: 100%;
  height: 100%;

  .css-q5we01-MuiDayCalendar-root {
    background-color: ${theme.colors.lightGray};
    padding: 8px;
    border-radius: ${theme.borderRadius.md};
  }
  .css-4k4mmf-MuiButtonBase-root-MuiPickersDay-root.Mui-selected:hover {
    background-color: ${theme.colors.primary4};
  }
  .css-4k4mmf-MuiButtonBase-root-MuiPickersDay-root.Mui-selected {
    background-color: ${theme.colors.primary4};
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;
