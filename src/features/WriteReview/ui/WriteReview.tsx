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
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 상태 추적용 ref 추가
  const currentImageRef = useRef(currentImage);
  const imagesRef = useRef(images);

  // 상태 변경 추적
  useEffect(() => {
    currentImageRef.current = currentImage;
  }, [currentImage]);

  useEffect(() => {
    imagesRef.current = images;
  }, [images]);

  useEffect(() => {
    if (currentImage) {
      setImages((prev) => {
        // 이미지 개수 제한 확인
        if (prev.length >= 5) {
          console.log("이미지는 최대 5장까지 업로드 가능합니다.");
          return prev;
        }
        return [...prev, currentImage];
      });
      // 이미지를 배열에 추가한 후 currentImage 초기화
      setCurrentImage(null);
    }
  }, [currentImage]);

  // 디버깅을 위한 로그
  useEffect(() => {
    console.log("=== 상태 변경 감지 ===");
    console.log("현재 currentImage 값:", currentImage);
    console.log("currentImageRef 값:", currentImageRef.current);
  }, [currentImage]);

  const please = (type: string, base64Image: string) => {
    console.log(type, "실행");
    console.log("지금 이게 실행이 되고 있어.");

    // base64Image가 올바른 형식인지 확인하고 필요시 prefix 추가
    const validBase64Image = base64Image.startsWith("data:image/")
      ? base64Image
      : `data:image/jpeg;base64,${base64Image}`;

    setCurrentImage(validBase64Image);
  };

  useEffect(() => {
    // 함수를 외부에서 선언하여 참조 안정성 확보
    const handleReceiveImage = async (base64Image: string) => {
      please("안드로이드 함수", base64Image);
    };

    window.receiveImage = handleReceiveImage;

    return () => {
      window.receiveImage = undefined;
    };
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
        setCurrentImage(reader.result as string);
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
      console.log(`난 이미지스임 ${i + 1} 번`, images);
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
        <img src={currentImage || PlusIcon} />
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
