import { RatingChart } from "@/shared/ui/RatingChart";
import * as S from "./WriteReview.style";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/shared/ui/Button";
import PlusIcon from "@/shared/assets/Plus.svg";
import { Text } from "@/shared/ui/Text";
import { writeReview } from "../api/api";
// import theme from "@/shared/styles/theme";

interface WriteReviewProps {
  carId: string;
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

export function WriteReview({ carId, handleSubmit }: WriteReviewProps) {
  const [starRate, setStarRate] = useState(5);
  const [review, setReview] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // currentImageRef를 사용하여 현재 이미지 값을 추적
  const currentImageRef = useRef(currentImage);
  const imagesRef = useRef(images);

  // currentImage가 변경될 때마다 ref 업데이트
  useEffect(() => {
    currentImageRef.current = currentImage;
    console.log(currentImage);
    if (currentImage) {
      setImages((prev) => {
        // 이미지 개수 제한 체크
        if (prev.length >= 5) {
          console.log("이미지는 최대 5장까지 업로드 가능합니다.");
          return prev;
        }
        return [...prev, currentImage];
      });
    }
  }, [currentImage]);

  // images 변경 추적
  useEffect(() => {
    imagesRef.current = images;
    console.log("현재 이미지 배열:", images);
  }, [images]);

  const please = (base64Image: string) => {
    setCurrentImage(base64Image);
  };

  useEffect(() => {
    // 함수를 외부에서 선언하여 참조 안정성 확보
    const handleReceiveImage = async (base64Image: string) => {
      please(base64Image);
    };

    window.receiveImage = handleReceiveImage;

    return () => {
      window.receiveImage = undefined;
    };
  }, [please]);

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

  const handleSubmitAction = () => {
    const form = new FormData();

    form.append("carId", carId);
    form.append("starRate", starRate.toString());
    form.append("content", review);

    images.forEach((image, index) => {
      const file = base64ToFile(image, `image_${index + 1}.jpg`);
      console.log(file);
      form.append("files", file);
    });

    writeReview(form)
      .then(() => {
        setImages([]); // 이미지 초기화
        setReview(""); // 리뷰 초기화
        handleSubmit();
      })
      .catch(() => console.log("에러임."));
  };

  const base64ToFile = (base64: string, fileName: string): File => {
    const arr = base64.split(",");
    const mime = arr[0].match(/:(.*?);/)?.[1] || "image/jpeg";
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], fileName, { type: mime });
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
        <Button
          buttonClick={handleSubmitAction}
          size="full"
          text="리뷰 작성완료"
          disable={images.length === 0 || review === ""}
        />
      </S.ButtonArea>
    </S.Container>
  );
}

export default WriteReview;
