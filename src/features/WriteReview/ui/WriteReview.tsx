import { RatingChart } from "@/shared/ui/RatingChart";
import * as S from "./WriteReview.style";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/shared/ui/Button";
import PlusIcon from "@/shared/assets/Plus.svg";
import { Text } from "@/shared/ui/Text";

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

export function WriteReview({ handleSubmit }: WriteReviewProps) {
  const [starRate, setStarRate] = useState(5);
  const [review, setReview] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [string, setString] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Android receiveImage 함수 등록
    if (!window.receiveImage) {
      window.receiveImage = (base64Image: string) => {
        alert("문장이 너무 길어.");
        alert(base64Image);
        setString(base64Image);

        setImages((prev) => {
          if (prev.length >= 5) {
            alert("이미지는 최대 5장까지 업로드 가능합니다.");
            return prev;
          }
          return [...prev, base64Image];
        });
      };
    }
  }, []);

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
        <RatingChart rate={starRate} setRating={handleStarRate} />
        {string}
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
