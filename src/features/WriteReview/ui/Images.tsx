import theme from "@/shared/styles/theme";

function Images({ images }: { images: string[] }) {
  console.log("나 렌더링 됐어.");
  console.log("난 이걸 props 으로 받았어.", images);
  return (
    <div>
      <img
        src={images[0]}
        width={100}
        height={100}
        alt={images[0] ? "이미지가 로드되었습니다." : "아직 이미지가 없습니다."}
        style={{ backgroundColor: theme.colors.lightGray }}
      />
    </div>
  );
}

export default Images;
