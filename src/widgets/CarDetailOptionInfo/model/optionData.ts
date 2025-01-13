import NavigationImg from "@/shared/assets/option_navigation.svg";
import HipassImg from "@/shared/assets/option_hipass.svg";
import HeatingSteeringWheelImg from "@/shared/assets/option_heatingsteeringwheel.svg";
import HeatingSeatImg from "@/shared/assets/option_heatingseat.svg";
import WindSeatImg from "@/shared/assets/option_windseat.svg";
import ElectricSeatImg from "@/shared/assets/option_electricseat.svg";
import LeatherSeatImg from "@/shared/assets/option_leatherseat.svg";
import ElectricTrunkImg from "@/shared/assets/option_electrictrunk.svg";
import SunroofImg from "@/shared/assets/option_sunroof.svg";
import HeadupDisplayImg from "@/shared/assets/option_headupdisplay.svg";
import SurroundViewImg from "@/shared/assets/option_surroundview.svg";
import BackMonitorImg from "@/shared/assets/option_backmonitor.svg";
import BackAlarmImg from "@/shared/assets/option_backalarm.svg";
import LineWarningImg from "@/shared/assets/option_linewarning.svg";
import SmartCruiseImg from "@/shared/assets/option_smartcruise.svg";
import FrontParkingImg from "@/shared/assets/option_frontwarning.svg";

export const OPTION_INFO = {
  "1": {
    text: "네비게이션",
    imageUrl: NavigationImg,
  },
  "2": {
    text: "하이패스",
    imageUrl: HipassImg,
  },
  "3": {
    text: "열선 스티어링 휠",
    imageUrl: HeatingSteeringWheelImg,
  },
  "4": {
    text: "열선 시트\n(1열/2열)",
    imageUrl: HeatingSeatImg,
  },
  "5": {
    text: "통풍시트(1열)",
    imageUrl: WindSeatImg,
  },
  "6": {
    text: "전동시트(1열)",
    imageUrl: ElectricSeatImg,
  },
  "7": {
    text: "가죽 시트",
    imageUrl: LeatherSeatImg,
  },
  "8": {
    text: "전동식 트렁크",
    imageUrl: ElectricTrunkImg,
  },
  "9": {
    text: "선루프",
    imageUrl: SunroofImg,
  },
  "10": {
    text: "헤드업\n디스플레이",
    imageUrl: HeadupDisplayImg,
  },
  "11": {
    text: "서라운드 뷰\n모니터",
    imageUrl: SurroundViewImg,
  },
  "12": {
    text: "후방 모니터",
    imageUrl: BackMonitorImg,
  },
  "13": {
    text: "후측방 경보\n시스템",
    imageUrl: BackAlarmImg,
  },
  "14": {
    text: "차선 이탈 경보",
    imageUrl: LineWarningImg,
  },
  "15": {
    text: "스마트 크루즈\n컨트롤",
    imageUrl: SmartCruiseImg,
  },
  "16": {
    text: "전방 주차거리\n경고",
    imageUrl: FrontParkingImg,
  },
} as const;
