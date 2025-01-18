import theme from "@/shared/styles/theme";
import PlusIcon from "@/shared/assets/Plus.svg";
import CarIcon from "@/shared/assets/car.svg";

function Images({
  images,
  currentImage,
}: {
  images: string[];
  currentImage: string;
}) {
  console.log("나 렌더링 됐어.");
  console.log("난 이걸 props 으로 받았어.", images);
  console.log("이건 지금 받은 current 이미지야", currentImage);
  return (
    <div>
      <img
        id="image1"
        src={images[0]}
        width={100}
        height={100}
        alt={images[0] ? "이미지가 로드되었습니다." : "아직 이미지가 없습니다."}
        style={{ backgroundColor: theme.colors.lightGray }}
      />
      {currentImage !== "" ? (
        <img
          src={CarIcon}
          width={100}
          height={100}
          alt={
            currentImage
              ? "이미지가 로드되었습니다."
              : "아직 이미지가 없습니다."
          }
          style={{ backgroundColor: theme.colors.lightGray }}
        />
      ) : (
        <img
          src={PlusIcon}
          width={100}
          height={100}
          alt={
            currentImage
              ? "이미지가 로드되었습니다."
              : "아직 이미지가 없습니다."
          }
          style={{ backgroundColor: theme.colors.lightGray }}
        />
      )}
    </div>
  );
}

export default Images;
