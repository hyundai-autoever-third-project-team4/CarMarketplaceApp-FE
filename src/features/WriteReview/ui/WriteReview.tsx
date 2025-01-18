import { RatingChart } from "@/shared/ui/RatingChart";
import * as S from "./WriteReview.style";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/shared/ui/Button";
import PlusIcon from "@/shared/assets/Plus.svg";
import { Text } from "@/shared/ui/Text";
import theme from "@/shared/styles/theme";

interface WriteReviewProps {
  handleSubmit: () => void;
}

declare global {
  interface Window {
    receiveImage?: (base64Image: string) => void;
    Android?: {
      openCameraAndGallery: () => void;
    };
  }
}

function base64ToBlob(base64: string, mimeType = "image/jpeg"): Blob {
  const byteCharacters = atob(base64.split(",")[1]); // Base64 데이터의 실제 바이너리 데이터 부분
  const byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const slice = byteCharacters.slice(offset, offset + 512);
    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  return new Blob(byteArrays, { type: mimeType });
}

function blobToFile(blob: Blob, fileName: string): File {
  return new File([blob], fileName, { type: blob.type });
}

export function WriteReview({ handleSubmit }: WriteReviewProps) {
  const [starRate, setStarRate] = useState(5);
  const [review, setReview] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.receiveImage = (base64Image: string) => {
      console.log("Received Base64:", base64Image.length);

      // Ensure the base64 string starts with the correct prefix
      const validBase64Image = base64Image.startsWith("data:image/jpeg;base64,")
        ? base64Image
        : `data:image/jpeg;base64,${base64Image}`;

      const blob = base64ToBlob(validBase64Image, "image/jpeg");
      const file = blobToFile(blob, "uploaded-image.jpg");

      // 파일 URL 생성 후 미리보기
      const fileUrl = URL.createObjectURL(file);
      console.log("File URL:", fileUrl);

      setImages((prevImages) => {
        if (prevImages.length >= 5) {
          alert("이미지는 최대 5장까지 업로드 가능합니다.");
          return prevImages;
        }
        return [...prevImages, fileUrl];
      });
    };

    // cleanup
    return () => {
      console.log("Cleaning up receiveImage function");
      window.receiveImage = undefined;
    };
  }, []);

  useEffect(() => {
    console.log("Images state updated:", images);
  }, [images]);

  const handleStarRate = (num: number) => {
    setStarRate(num);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    if (images.length + files.length > 5) {
      alert("이미지는 최대 5개까지 업로드 가능합니다.");
      return;
    }

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleUploadClick = () => {
    if (window.Android) {
      window.Android.openCameraAndGallery(); // Android JavaScript 인터페이스 호출
    } else {
      fileInputRef.current?.click();
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmitAction = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      starRate,
      review,
      images,
    });

    setImages([]); // 이미지 초기화
    setReview(""); // 리뷰 초기화
    handleSubmit();
  };

  const renderImageGrid = () => {
    const items = [];
    //const totalSlots = Math.min(images.length + 1, 5);

    // Add existing images
    for (let i = 0; i < images.length; i++) {
      items.push(
        <S.ImageItem key={i} onClick={() => handleRemoveImage(i)}>
          <img src={images[i]} alt={`Uploaded image ${i + 1}`} />
        </S.ImageItem>
      );
    }

    // Add upload box if we haven't reached the limit
    if (images.length < 5) {
      items.push(
        <S.UploadBox key="upload" onClick={handleUploadClick}>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
          <S.PlusIconWrapper>
            <img src={PlusIcon} alt="Add image" />
          </S.PlusIconWrapper>
        </S.UploadBox>
      );
    }

    // Add empty boxes to maintain grid structure
    while (items.length < 3) {
      items.push(<S.EmptyBox key={`empty-${items.length}`} />);
    }

    return items;
  };

  return (
    <S.Container>
      <form onSubmit={handleSubmitAction}>
        <img
          src={images[0]}
          width={100}
          height={100}
          alt={
            images[0] ? "이미지가 로드되었습니다." : "아직 이미지가 없습니다."
          }
          style={{ backgroundColor: theme.colors.lightGray }}
        />

        <RatingChart rate={starRate} setRating={handleStarRate} />
        <S.TextWrap>
          <Text fontType="sub2">사진은 최대 5장까지 가능합니다.</Text>
        </S.TextWrap>
        <S.ImageUploadGrid>{renderImageGrid()}</S.ImageUploadGrid>
        <S.TextArea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="차량 리뷰를 남겨주세요 :)"
        />
        <S.ButtonArea>
          <Button buttonClick={handleSubmit} size="full" text="리뷰 작성완료" />
        </S.ButtonArea>
      </form>
    </S.Container>
  );
}

export default WriteReview;
