import Page1 from "../pages/Page1";
import { Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Page1 />} />
    </Routes>
  );
}

export default AppRoutes;
