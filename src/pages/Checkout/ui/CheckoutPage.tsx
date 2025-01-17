import { Button } from "@/shared/ui/Button";
import { loadTossPayments } from "@tosspayments/tosspayments-sdk";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// TossPaymentsInstance와 WidgetsInstance 타입 정의
type TossPaymentsInstance = {
  widgets: (config: { customerKey: string }) => WidgetsInstance;
};

type WidgetsInstance = {
  setAmount: (amount: { currency: string; value: number }) => Promise<void>;
  renderPaymentMethods: (config: {
    selector: string;
    variantKey: string;
  }) => Promise<void>;
  renderAgreement: (config: {
    selector: string;
    variantKey: string;
  }) => Promise<void>;
  requestPayment: (config: {
    orderId: string;
    orderName: string;
    successUrl: string;
    failUrl: string;
    metadata?: {
      // metadata 속성 추가
      userId: string;
      marketplaceCarId: string;
    };
  }) => Promise<void>;
};

type Amount = {
  currency: string;
  value: number;
};

const clientKey = import.meta.env.VITE_PAYMENT_CLIENT_KEY;
const customerKey = import.meta.env.VITE_PAYMENT_CUSTOMER_KEY;

export function CheckoutPage(): JSX.Element {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const price = queryParams.get("price");
  const name = queryParams.get("name");
  const id = queryParams.get("id");

  const [amount] = useState<Amount>({
    currency: "KRW",
    value: Number(price),
  });
  const [ready, setReady] = useState<boolean>(false);
  const [widgets, setWidgets] = useState<WidgetsInstance | null>(null);

  useEffect(() => {
    async function fetchPaymentWidgets() {
      try {
        // ------  결제 위젯 초기화 ------
        const tossPayments = (await loadTossPayments(
          clientKey
        )) as unknown as TossPaymentsInstance;

        // 회원 결제
        const widgetsInstance = tossPayments.widgets({
          customerKey,
        });

        setWidgets(widgetsInstance);
      } catch (error) {
        console.error("Error loading Toss Payments:", error);
      }
    }

    fetchPaymentWidgets();
  }, []);

  useEffect(() => {
    async function renderPaymentWidgets() {
      if (!widgets) return;

      try {
        // ------ 주문의 결제 금액 설정 ------
        await widgets.setAmount({
          currency: "KRW",
          value: Number(price),
        });

        await Promise.all([
          // ------ 결제 UI 렌더링 ------
          widgets.renderPaymentMethods({
            selector: "#payment-method",
            variantKey: "DEFAULT",
          }),
          // ------ 이용 약관 UI 렌더링 ------
          widgets.renderAgreement({
            selector: "#agreement",
            variantKey: "AGREEMENT",
          }),
        ]);

        setReady(true);
      } catch (error) {
        console.error("Error rendering widgets:", error);
      }
    }

    renderPaymentWidgets();
  }, [widgets]);

  useEffect(() => {
    if (!widgets) return;

    widgets.setAmount(amount).catch((error) => {
      console.error("Error updating amount:", error);
    });
  }, [widgets, amount]);

  return (
    <div className="wrapper">
      <div className="box_section">
        {/* 결제 UI */}
        <div id="payment-method" />
        {/* 이용 약관 UI */}
        <div id="agreement" />
        {/* 결제하기 버튼 */}
        <Button
          text={"결제하기"}
          size="full"
          disable={!ready}
          buttonClick={async () => {
            if (!widgets) return;

            try {
              // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
              await widgets.requestPayment({
                orderId: crypto.randomUUID(),
                orderName: name!,
                successUrl: `${window.location.origin}/success`,
                failUrl: `${window.location.origin}/fail`,
                metadata: {
                  userId: localStorage.getItem("userId")!,
                  marketplaceCarId: id!,
                },
              });
            } catch (error) {
              console.error("Error requesting payment:", error);
            }
          }}
        ></Button>
      </div>
    </div>
  );
}
