import { SearchFormValue } from "./type";

export const CAR_TYPES = ["승용", "승합", "SUV", "EV"] as const;

export const MODELS = [
  "아반떼",
  "쏘나타",
  "그랜저",
  "베뉴",
  "싼타페",
  "코나",
  "투싼",
  "팰리세이드",
  "스타리아",
  "아이오닉",
  "캐스퍼",
  "벨로스터",
  "i30",
  "코나 일렉트릭",
  "아이오닉 일렉트릭",
  "아이오닉 5",
  "아이오닉 6",
  "G80",
  "G90",
  "GV60",
  "GV70",
  "GV80",
  "G70",
  "ELECTRIFIED GV70",
  "ELECTRIFIED G80",
] as const;

export const PRICES = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000] as const;

export const MILEAGES = [
  0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000,
  110000, 120000,
] as const;

export const MODEL_YEARS = [
  2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,
] as const;

export const FUELS = ["가솔린", "디젤", "하이브리드", "전기"] as const;

export const COLORS = [
  "화이트",
  "베이지",
  "실버",
  "그레이",
  "블랙",
  "브라운",
  "레드",
  "오렌지",
  "옐로우",
  "그린",
  "블루",
  "퍼플",
] as const;

export const CAR_OPTIONS = [
  "내비게이션",
  "하이패스",
  "열선 스티어링 휠",
  "열선시트(1열/2열)",
  "통풍시트(1열)",
  "전동시트(1열)",
  "가죽 시트",
  "전동식 트렁크",
  "선루프",
  "헤드업 디스플레이",
  "서라운드 뷰 모니터",
  "후방 모니터",
  "후측방 경보 시스템",
  "차선 이탈 경보",
  "스마트 크루즈 컨트롤",
  "전방 주차거리 경고",
] as const;

export const DEFAULT_VALUE: SearchFormValue = {
  carType: [],
  model: [],
  prices: [],
  minPrice: 1000,
  maxPrice: 8000,
  minMileage: 0,
  maxMileage: 120000,
  minModelYear: 2018,
  maxModelYear: 2025,
  fuelType: [],
  colorType: [],
  optionIds: [],
} as const;
