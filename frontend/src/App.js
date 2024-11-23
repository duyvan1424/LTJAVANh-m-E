
import { Route, Routes } from "react-router-dom";
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import InformationPage from './pages/information';
import Home from './pages/home';
import ShippingServicePage from './pages/vanchuyennoidia';
import PhieuguiKH from './pages/phieuguiKH';
import Vanchuyennoidia from './pages/vanchuyennoidia';
import Vanchuyenquocte from './pages/vanchuyenquocte';
import OrderHistory from './pages/OrderHistory';
import UserManagement from './pages/userManagement';
import Tracuu from "./pages/tracuudonhang";
import CheckOrder from "./pages/checkOrder";
import PrivateRoute from "./components/layout/privateRoute";
import StaffOrderManagement from "./pages/staff";
// import UserInfoPage from "./pages/UserInfo";
import Taodonhang from "./components/taodonhang";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/user-info" element={<UserInfoPage />} /> */}
      <Route path="/information" element={<InformationPage />} />
      <Route path="/vanchuyennoidia" element={<ShippingServicePage />} />
      <Route path="/domestic-shipping" element={<Vanchuyennoidia />} />
      <Route path="/international-shipping" element={<Vanchuyenquocte />} />
      <Route path="/track-order" element={<Tracuu/>} />
       {/* Route dành cho nhân viên với phân quyền */}
       <Route
        path="/staff"
        element={
          <PrivateRoute requiredRole={["1", "2"]}> {/* Chấp nhận cả role "1" và "2" */}
            <StaffOrderManagement />
          </PrivateRoute>
        }
      />

      {/* Route quản lý người dùng dành cho role "2" */}
      <Route
        path="/quanly"
        element={
          <PrivateRoute requiredRole={["2"]}>
            <UserManagement />
          </PrivateRoute>
        }
      />

      {/* Route kiểm tra đơn hàng */}
      <Route
        path="/check"
        element={
          <PrivateRoute requiredRole={["1", "2"]}> {/* Chấp nhận cả role "1" và "2" */}
            <CheckOrder />
          </PrivateRoute>
        }
      />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/phieugui" element={<PhieuguiKH/>}/>
      <Route path="/history" element={<OrderHistory/>}/>
      <Route path="/tracuu" element={<Tracuu/>}/>
      <Route path="/taodonhang" element={<Taodonhang/>}/>
      


    </Routes>
  );
}

export default App;