import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import RidersPage from "./pages/RidersPage/RidersPage";
import GetInTouch from "./pages/GetInTouch/Index"
import Dietitian from "./pages/Dietitian/Index";
import Faq from "./pages/Faq/Index";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="become-a-rider" element={<RidersPage />} />
      <Route path="get-in-touch" element={<GetInTouch />} />
      <Route path="faq" element={<Faq />} />
      <Route path="dietitian" element={<Dietitian />} />
    </Routes>
  );
}

export default App;
