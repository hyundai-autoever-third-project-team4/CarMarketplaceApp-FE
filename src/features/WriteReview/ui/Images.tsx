import theme from "@/shared/styles/theme";
import CarIcon from "@/shared/assets/car.svg";

function Images({
  images,
  currentImage,
}: {
  images: string[];
  currentImage: string | null;
}) {
  return (
    <div>
      {currentImage === null ? <>안녕</> : <>이제 바꼈어.</>}
      <img
        src={CarIcon}
        width={100}
        height={100}
        alt={images[0] ? "이미지가 로드되었습니다." : "아직 이미지가 없습니다."}
        style={{ backgroundColor: theme.colors.lightGray }}
      />
      <img
        src={currentImage || CarIcon} // currentImage가 null이면 CarIcon을 보여줌
        width={100}
        height={100}
        alt={
          currentImage ? "이미지가 로드되었습니다." : "아직 이미지가 없습니다."
        }
        style={{ backgroundColor: theme.colors.lightGray }}
      />
    </div>
  );
}

export default Images;
