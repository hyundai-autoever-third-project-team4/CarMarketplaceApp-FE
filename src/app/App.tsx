import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
