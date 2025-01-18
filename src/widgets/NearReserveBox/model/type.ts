// 예약 항목 인터페이스 정의
export interface ReservationItem {
  carName: string | null; // 차량 이름
  mainImage: string | null; // 차량 메인 이미지 URL
  driveCenter: string | null; // 시승소 이름
  reservationDate: string | null; // 예약 날짜
  reservationTime: string | null; // 예약 시간
}
