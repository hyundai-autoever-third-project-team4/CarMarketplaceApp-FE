import { RatingChart } from "@/shared/ui/RatingChart";
import * as S from "./WriteReview.style";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/shared/ui/Button";
import PlusIcon from "@/shared/assets/Plus.svg";
import { Text } from "@/shared/ui/Text";
// import theme from "@/shared/styles/theme";
import Images from "./Images";

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

  useEffect(() => {
    const changeImage = async (image: string) => {
      const data = await fetch(image);
      const blob = await data.blob();
      const url = URL.createObjectURL(blob);

      return url;
    };
    window.receiveImage = async (base64Image: string) => {
      // Ensure the base64 string starts with the correct prefix
      const validBase64Image = base64Image.startsWith("data:image/jpeg;base64,")
        ? base64Image
        : `data:image/jpeg;base64,${base64Image}`;

      const imageUrl = await changeImage(validBase64Image);
      console.log("지금 이게 실행이 되고 있어.");
      setCurrentImage("12313213"); // currentImage 상태 업데이트

      setImages((prevImages) => {
        if (prevImages.length >= 5) {
          alert("이미지는 최대 5장까지 업로드 가능합니다.");
          return prevImages;
        }
        return [...prevImages, imageUrl];
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
    setCurrentImage("sdasdsd");
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
        <Images images={images} currentImage={currentImage} />

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
