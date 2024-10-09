import "./index";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import TrackOrderPage from "./pages/jack-order";
import ServicesPage from "./pages/service";
import InformationPage from "./pages/information";
import Home from "./pages/home";
import DomesticShipping from "./pages/domestic-shipping";
import InternationalShipping from "./pages/international-shipping";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/information" element={<InformationPage />} />
      <Route path="/service" element={<ServicesPage />} />
      <Route path="/domestic-shipping" element={<DomesticShipping />} />
      <Route
        path="/international-shipping"
        element={<InternationalShipping />}
      />
      <Route path="/jack-order" element={<TrackOrderPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
