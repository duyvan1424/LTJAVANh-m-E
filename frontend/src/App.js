import './index';
import { Route, Routes } from "react-router-dom";
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import TrackOrderPage from './pages/jack-order';
import InformationPage from './pages/information';
import Home from './pages/home';
import ShippingServicePage from './pages/vanchuyennoidia';
import PhieuguiKH from './pages/phieuguiKH';
import Vanchuyennoidia from './pages/vanchuyennoidia';
import Vanchuyenquocte from './pages/vanchuyenquocte';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/information" element={<InformationPage />} />
      <Route path="/vanchuyennoidia" element={<ShippingServicePage />} />
      <Route path="/domestic-shipping" element={<Vanchuyennoidia />} />
      <Route path="/international-shipping" element={<Vanchuyenquocte />} />
      <Route path="/track-order" element={<TrackOrderPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/phieugui" element={<PhieuguiKH/>}/>
    </Routes>
  );
}

export default App;