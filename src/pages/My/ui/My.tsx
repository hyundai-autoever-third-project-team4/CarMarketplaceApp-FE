import { Text } from "@/shared/ui/Text";
import * as S from "./My.style";
import { Button } from "@/shared/ui/Button";
import { NearReserveBox } from "@/widgets/NearReserveBox";
import LikeImg from "@/shared/assets/heart.svg";
import SellImg from "@/shared/assets/sell_icon.svg";
import BuyImg from "@/shared/assets/car.svg";
import ReservationImg from "@/shared/assets/reservation_list_icon.svg";
import ReviewImg from "@/shared/assets/review_list_icon.svg";
import { useNavigate } from "react-router-dom";
import { handleLoginClick } from "@/shared/api/login";
import { CustomLoading } from "@/shared/ui/CustomLoading";
import { useQuery } from "@tanstack/react-query";
import { handleGetUserInfo, UserInfo } from "@/pages/My/api/api";

export function My() {
  const {
    data: userInfo,
    isFetching,
    isError,
  } = useQuery<UserInfo>({
    queryKey: ["userInfo"], // 쿼리 키
    queryFn: handleGetUserInfo, // API 호출 함수
    enabled: localStorage.getItem("access_token") !== null, // access_token이 있을 때만 쿼리 실행
  });

  const navigate = useNavigate();
  console.log(
    "🤍🤍🤍🤍🤍🤍🤍access토큰 : ",
    localStorage.getItem("access_token")
  );
  const handleClickLike = () => {
    // 찜한 차량 페이지로 이동
    navigate("like");
  };

  const handleClickSell = () => {
    // 판매한 차량 페이지로 이동
    navigate("sell");
  };

  const handleClickBuy = () => {
    // 구매한 차량 페이지로 이동
    navigate("payment");
  };

  const handleClickReservation = () => {
    // 시승 예약 내역 페이지로 이동
    navigate("reservation");
  };

  const handleClickReview = () => {
    // 리뷰 페이지로 이동
    navigate("review");
  };

  if (isFetching) {
    return <CustomLoading middle={true} text={"로딩 중 입니다..."} />; // 로딩 상태 처리
  }

  if (isError) {
    return <div>Error loading reviews.</div>; // 에러 상태 처리
  }

  return (
    <>
      {/* 일단 !==로 설정 해두고 로그인 된 페이지 제작 중 */}

      {localStorage.getItem("access_token") === null ? (
        <S.Container>
          <S.NotLogin>
            <S.LoginArea>
              <Text fontType="subTitle">로그인 후 이용 가능합니다.</Text>
              <Button
                size="login"
                text="로그인"
                buttonClick={handleLoginClick}
              />
            </S.LoginArea>
          </S.NotLogin>
        </S.Container>
      ) : (
        <S.LoginedContainer>
          <S.MyPageTopSection>
            <S.TextWrap>
              <Text fontType="title">{userInfo?.userName}</Text>
              <Text fontType="title" fontColor="gray">
                고객님
              </Text>
            </S.TextWrap>
            {userInfo == undefined || userInfo.reservation.length == 0 ? (
              <NearReserveBox
                carName={null}
                mainImage={null}
                driveCenter={null}
                reservationDate={null}
                reservationTime={null}
              />
            ) : (
              <NearReserveBox
                carName={userInfo.reservation[0].carName}
                mainImage={userInfo.reservation[0].mainImage}
                driveCenter={userInfo.reservation[0].driveCenter}
                reservationDate={userInfo.reservation[0].reservationDate}
                reservationTime={userInfo.reservation[0].reservationTime}
              />
            )}
          </S.MyPageTopSection>
          <S.MyPageBottomSection>
            <S.ButtonWrap onClick={handleClickLike}>
              <S.IconImg src={LikeImg} />
              <Text fontType="subTitle">찜한 차량</Text>
            </S.ButtonWrap>
            <S.ButtonWrap onClick={handleClickSell}>
              <S.IconImg src={SellImg} />
              <Text fontType="subTitle">내가 판매한 차량</Text>
            </S.ButtonWrap>
            <S.ButtonWrap onClick={handleClickBuy}>
              <S.IconImg src={BuyImg} />
              <Text fontType="subTitle">내가 구매한 차량</Text>
            </S.ButtonWrap>
            <S.ButtonWrap onClick={handleClickReservation}>
              <S.IconImg src={ReservationImg} />
              <Text fontType="subTitle">시승 예약 내역</Text>
            </S.ButtonWrap>
            <S.ButtonWrap onClick={handleClickReview}>
              <S.IconImg src={ReviewImg} />
              <Text fontType="subTitle">나의 리뷰</Text>
            </S.ButtonWrap>
          </S.MyPageBottomSection>
        </S.LoginedContainer>
      )}
    </>
  );
}
