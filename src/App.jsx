import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import RidersPage from "./pages/RidersPage/RidersPage";
import GetInTouch from "./pages/GetInTouch/Index"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="become-a-rider" element={<RidersPage />} />
      <Route path="get-in-touch" element={<GetInTouch />} />
    </Routes>
  );
}

export default App;
