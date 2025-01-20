import { authInstance } from "@/shared/api/axiosInstance";
import { DefaultPopup } from "@/shared/ui/DefaultPopup";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export function PaySuccessPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isPopupOpen, setisPopupOpen] = useState<boolean>(false);

  const handlePopupClose = () => {
    setisPopupOpen(false);
    navigate("/");
  };

  useEffect(() => {
    // 쿼리 파라미터 값이 결제 요청할 때 보낸 데이터와 동일한지 반드시 확인하세요.
    // 클라이언트에서 결제 금액을 조작하는 행위를 방지할 수 있습니다.
    const requestData = {
      orderId: searchParams.get("orderId"),
      amount: searchParams.get("amount"),
      paymentKey: searchParams.get("paymentKey"),
    };

    async function confirm() {
      try {
        const response = await authInstance.post(
          "/payment/confirm",
          requestData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
        if (response.status !== 200) {
          // 응답의 성공 여부를 확인
          // 결제 실패 비즈니스 로직을 구현하세요.
          navigate(
            `/fail?message=${response.data.message}&code=${response.data.code}`
          );
          return;
        }

        // 결제 성공 비즈니스 로직을 구현하세요.
        setisPopupOpen(true);
        console.log("결제 성공:", response.data);
      } catch (error: any) {
        console.error("결제 요청 중 오류 발생:", error);
        // 오류 처리 로직을 추가하세요.
        navigate(
          `/fail?message=결제 요청 중 오류 발생&code=${
            error.code || "UNKNOWN_ERROR"
          }`
        );
      }
    }

    confirm();
  }, []);

  return (
    <div className="result wrapper">
      <div className="box_section">
        <h2>결제 성공</h2>
        <p>{`주문번호: ${searchParams.get("orderId")}`}</p>
        <p>{`결제 금액: ${Number(
          searchParams.get("amount")
        ).toLocaleString()}원`}</p>
        <p>{`paymentKey: ${searchParams.get("paymentKey")}`}</p>
      </div>
      <DefaultPopup
        open={isPopupOpen}
        handleClose={handlePopupClose}
        content={"결제가 완료되었습니다."}
      />
    </div>
  );
}
