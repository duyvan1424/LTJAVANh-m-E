import React from "react";
import BasicTextFields from "./layout/testField";
import TextField from '@mui/material/TextField';

function Taodonhang() {
  return (
    <div className="grid grid-cols-5 gap-4 p-8 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 min-h-screen">
      {/* Header */}
      <div className="col-start-2 col-span-3 text-center text-2xl font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-lg shadow-lg">
        TẠO ĐƠN HÀNG
      </div>

      {/* Thông tin người gửi */}
      <div className="col-start-2 row-start-2 col-span-3 p-6 bg-gradient-to-br from-purple-200 to-blue-200 rounded-lg shadow-lg">
        <div className="text-lg font-semibold text-gray-700 mb-4">Thông tin người gửi</div>
        <div className="grid grid-cols-2 gap-4">
          <BasicTextFields
            label="Họ và tên người gửi"
            type="text"
            name="name"
            placeholder="Nhập họ và tên"
            required={true}
            className="bg-white p-2 rounded"
          />
          <BasicTextFields
            label="Số điện thoại"
            type="number"
            name="sdt"
            placeholder="Nhập số điện thoại"
            required={true}
            className="bg-white p-2 rounded"
          />
          <BasicTextFields
            label="Thành phố, tỉnh, quận-huyện"
            type="text"
            name="location"
            placeholder="Nhập địa chỉ"
            required={true}
            className="bg-white p-2 rounded"
          />
          <BasicTextFields
            label="Địa chỉ cụ thể"
            type="text"
            name="address"
            placeholder="Nhập địa chỉ cụ thể"
            required={true}
            className="bg-white p-2 rounded"
          />
        </div>
      </div>

      {/* Thông tin người nhận */}
      <div className="col-start-2 row-start-3 col-span-3 p-6 bg-gradient-to-br from-purple-200 to-blue-200 rounded-lg shadow-lg">
        <div className="text-lg font-semibold text-gray-700 mb-4">Thông tin người nhận</div>
        <div className="grid grid-cols-2 gap-4">
          <BasicTextFields
            label="Họ và tên người nhận"
            type="text"
            name="receiverName"
            placeholder="Nhập họ và tên"
            required={true}
            className="bg-white p-2 rounded"
          />
          <BasicTextFields
            label="Số điện thoại"
            type="number"
            name="receiverPhone"
            placeholder="Nhập số điện thoại"
            required={true}
            className="bg-white p-2 rounded"
          />
          <BasicTextFields
            label="Thành phố, tỉnh, quận-huyện"
            type="text"
            name="receiverLocation"
            placeholder="Nhập địa chỉ"
            required={true}
            className="bg-white p-2 rounded"
          />
          <BasicTextFields
            label="Địa chỉ cụ thể"
            type="text"
            name="receiverAddress"
            placeholder="Nhập địa chỉ cụ thể"
            required={true}
            className="bg-white p-2 rounded"
          />
        </div>
      </div>

      {/* Thông tin hàng hóa */}
      <div className="col-start-2 row-start-4 col-span-3 p-6 bg-gradient-to-br from-purple-200 to-blue-200 rounded-lg shadow-lg">
        <div className="text-lg font-semibold text-gray-700 mb-4">Thông tin hàng hóa</div>
        <div className="grid grid-cols-2 gap-4">
          <BasicTextFields
            label="Phương thức gửi hàng"
            type="text"
            name="shippingMethod"
            placeholder="Nhập phương thức"
            required={true}
            className="bg-white p-2 rounded"
          />
          <BasicTextFields
            label="Loại dịch vụ"
            type="text"
            name="serviceType"
            placeholder="Nhập loại dịch vụ"
            required={true}
            className="bg-white p-2 rounded"
          />
          <BasicTextFields
            label="Loại hàng hóa"
            type="text"
            name="productType"
            placeholder="Nhập loại hàng hóa"
            required={true}
            className="bg-white p-2 rounded"
          />
          <BasicTextFields
            label="Trọng lượng (kg)"
            type="text"
            name="weight"
            placeholder="Nhập trọng lượng"
            required={true}
            className="bg-white p-2 rounded"
          />
          <BasicTextFields
            label="Chiều dài (cm)"
            type="text"
            name="length"
            placeholder="Nhập chiều dài"
            required={true}
            className="bg-white p-2 rounded"
          />
          <BasicTextFields
            label="Chiều rộng (cm)"
            type="text"
            name="width"
            placeholder="Nhập chiều rộng"
            required={true}
            className="bg-white p-2 rounded"
          />
          <BasicTextFields
            label="Chiều cao (cm)"
            type="text"
            name="height"
            placeholder="Nhập chiều cao"
            required={true}
            className="bg-white p-2 rounded"
          />
        </div>
        <TextField label="Ghi chú" variant="outlined" fullWidth className="mt-4 bg-white p-2 rounded" />
      </div>

      {/* Footer */}
      <div className="col-start-2 row-start-5 col-span-3 bg-purple-300 p-6 rounded-lg text-gray-800 shadow-lg">
        <div className="text-lg font-medium mb-2">
          Tổng cước tạm tính:
          <br />
          Tôi đồng ý và chấp thuận Điều kiện và điều khoản của công ty.
        </div>
        <button className="mt-4 w-full bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200">
          Xác nhận đơn hàng
        </button>
      </div>
    </div>
  );
}

export default Taodonhang;
