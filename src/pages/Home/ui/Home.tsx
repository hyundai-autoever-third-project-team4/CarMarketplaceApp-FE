import { PopularCarCard } from "@/entities/Car";

export function Home() {
  return (
    <div>
      <PopularCarCard
        mainImage="/src/shared/assets/default.png"
        name="2023 GV70 가솔린 2.5 터보 AWD 스탠다드 디자인"
        like={345}
        index={1}
      />
    </div>
  );
}
