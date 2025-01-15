import theme from "@/shared/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const ButtonArea = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
`;

export const TextWrap = styled.div`
  margin: 16px 0px 10px 0px;
`;

export const ImageUploadGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`;

export const ImageItem = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const UploadBox = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: 8px;
  background-color: ${theme.colors.lightGray};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${theme.colors.gray};
  }
`;

export const PlusIconWrapper = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    width: 100%;
    height: 100%;
  }
`;

export const EmptyBox = styled.div`
  aspect-ratio: 1;
  border-radius: 8px;
  background-color: ${theme.colors.lightGray};
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 200px;
  padding: 16px;
  border: 1px solid ${theme.colors.gray};
  border-radius: 8px;
  resize: vertical;
  margin: 20px 0;

  &::placeholder {
    color: ${theme.colors.darkGray};
  }
`;
