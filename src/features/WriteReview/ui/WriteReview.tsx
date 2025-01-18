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
  const byteCharacters = atob(base64.split(",")[1]);
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

export function WriteReview({ handleSubmit }: WriteReviewProps) {
  const [starRate, setStarRate] = useState(5);
  const [review, setReview] = useState("");
  const [images, setImages] = useState<{ url: string; blob: Blob }[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [forceUpdate, setForceUpdate] = useState(0);
  const [number, setNumber] = useState<number>(0);

  useEffect(() => {
    if (images.length > 0) {
      console.log("이미지 상태 업데이트됨:");
      console.log("이미지 개수:", images.length);
      console.log("첫 번째 이미지 URL:", images[0].url);

      // URL이 유효한지 확인
      fetch(images[0].url)
        .then((response) => {
          console.log("URL 접근 가능:", response.ok);
        })
        .catch((error) => {
          console.error("URL 접근 실패:", error);
        });
    }
  }, [images]);

  useEffect(() => {
    window.receiveImage = (base64Image: string) => {
      // Ensure the base64 string starts with the correct prefix
      const validBase64Image = base64Image.startsWith("data:image/jpeg;base64,")
        ? base64Image
        : `data:image/jpeg;base64,${base64Image}`;

      console.log("변환된 base64:", validBase64Image.substring(0, 50) + "..."); // 앞부분만 출력

      const blob = base64ToBlob(validBase64Image, "image/jpeg");
      const url = URL.createObjectURL(blob);
      console.log("생성된 URL:", url);

      setImages((prevImages) => {
        setForceUpdate((prev) => prev + 1);
        console.log(forceUpdate);
        if (prevImages.length >= 5) {
          URL.revokeObjectURL(url);
          return prevImages;
        }
        return [...prevImages, { url, blob }];
      });
    };

    return () => {
      window.receiveImage = undefined;
    };
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    if (images.length + files.length > 5) {
      alert("이미지는 최대 5개까지 업로드 가능합니다.");
      return;
    }

    Array.from(files).forEach((file) => {
      const url = URL.createObjectURL(file);
      setImages((prev) => [...prev, { url, blob: file }]);
    });
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => {
      const url = prev[index].url;
      URL.revokeObjectURL(url);
      return prev.filter((_, i) => i !== index);
    });
  };

  const handleUploadClick = () => {
    if (window.Android) {
      window.Android.openCameraAndGallery();
    } else {
      fileInputRef.current?.click();
    }
  };

  const handleSubmitAction = (e: React.FormEvent) => {
    e.preventDefault();

    // Cleanup existing URLs before resetting
    images.forEach((img) => URL.revokeObjectURL(img.url));

    setImages([]);
    setReview("");
    handleSubmit();
  };

  const renderImageGrid = () => {
    const items = [];

    for (let i = 0; i < images.length; i++) {
      items.push(
        <S.ImageItem key={i} onClick={() => handleRemoveImage(i)}>
          <img src={images[i].url} alt={`Uploaded image ${i + 1}`} />
        </S.ImageItem>
      );
    }

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

    while (items.length < 3) {
      items.push(<S.EmptyBox key={`empty-${items.length}`} />);
    }

    return items;
  };

  return (
    <S.Container>
      <Button
        text="숫자 업"
        size="small"
        buttonClick={() => setNumber((p) => p + 1)}
      />
      <Text fontType="title">숫자: {number}</Text>
      <Text fontType="title">이미지 개수: {images.length}</Text>
      {images.length > 0 ? (
        <div>
          <p>이미지 URL: {images[0].url}</p>
          <img
            key={images[0].url} // key 추가
            src={images[0].url}
            width={100}
            height={100}
            alt="업로드된 이미지"
            style={{ backgroundColor: theme.colors.lightGray }}
            onError={(e) => console.error("이미지 로드 실패:", e)}
            onLoad={() => console.log("이미지 로드 성공")}
          />
        </div>
      ) : (
        <p>이미지가 없습니다.</p>
      )}

      <form onSubmit={handleSubmitAction}>
        <RatingChart rate={starRate} setRating={setStarRate} />
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
