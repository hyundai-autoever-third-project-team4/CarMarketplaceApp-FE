import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { NotFound } from "@pages/NotFound";
import { Loading } from "@/pages/Loading";
import { Home } from "@/pages/Home";
import { CarDetail } from "@pages/CarDetail";
import { CarList } from "@pages/CarList";
import { CarSell } from "@/pages/CarSell";
import { DriveCenterMap } from "@/pages/DriveCenterMap";
import { My } from "@/pages/My";
import { MyLike } from "@/pages/MyLike";
import { MyPayment } from "@/pages/MyPayment";
import { MyReservation } from "@/pages/MyReservation";
import { MyReview } from "@/pages/MyReview";
import { MySell } from "@/pages/MySell";
import { Reservation } from "@/pages/Reservation";
import { Search } from "@/pages/Search";
import { Chatting } from "@/pages/Chatting";
import { SignUp } from "@/pages/SignUp";
import { CheckoutPage } from "@/pages/Checkout";
import { PaySuccessPage } from "@/pages/PaySuccess";
import { FailPage } from "@/pages/Fail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/carList",
        element: <CarList />,
      },
      {
        path: "/carDetail/:carId",
        element: <CarDetail />,
      },
      {
        path: "/carSell",
        element: <CarSell />,
      },
      {
        path: "/driveCenterMap",
        element: <DriveCenterMap />,
      },
      {
        path: "/reservation",
        element: <Reservation />,
      },
      {
        path: "/chatting",
        element: <Chatting />,
      },
      {
        path: "/my",
        element: <My />,
      },
      {
        path: "my/like",
        element: <MyLike />,
      },
      {
        path: "my/sell",
        element: <MySell />,
      },
      {
        path: "my/payment",
        element: <MyPayment />,
      },
      {
        path: "my/reservation",
        element: <MyReservation />,
      },
      {
        path: "my/review",
        element: <MyReview />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/tosspayment",
        element: <CheckoutPage />,
      },
      {
        path: "/success",
        element: <PaySuccessPage />,
      },
      {
        path: "/fail",
        element: <FailPage />,
      },
    ],
  },
]);

export function RouteProvider() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
