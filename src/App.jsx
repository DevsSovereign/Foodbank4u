import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import RidersPage from "./pages/RidersPage/RidersPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="become-a-rider" element={<RidersPage />} />
    </Routes>
  );
}

export default App;
