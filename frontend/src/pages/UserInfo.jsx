// import React, { useEffect, useState } from 'react';
// import { usersApi } from '../apis/users.api'; // API lấy thông tin người dùng
// import { ordersApi } from '../apis/order.api'; // API lấy danh sách đơn hàng

// function UserInfoPage() {
//   const [user, setUser] = useState(null); // Trạng thái lưu thông tin người dùng
//   const [orders, setOrders] = useState([]); // Trạng thái lưu danh sách đơn hàng
//   const [loadingUser, setLoadingUser] = useState(true); // Trạng thái tải thông tin người dùng
//   const [loadingOrders, setLoadingOrders] = useState(true); // Trạng thái tải danh sách đơn hàng

//   useEffect(() => {
//     // Lấy thông tin user từ localStorage và parse JSON
//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     const userId = storedUser?.id;

//     if (userId) {
//       // Lấy thông tin người dùng dựa trên userId
//       usersApi.getUserById(userId)
//         .then(response => {
//           setUser(response.data);
//           setLoadingUser(false);
//         })
//         .catch(error => {
//           console.error('Lỗi khi lấy thông tin người dùng:', error);
//           setLoadingUser(false);
//         });

//       // Lấy danh sách đơn hàng của người dùng hiện tại
//       ordersApi.getOrdersByUserId(userId)
//         .then(response => {
//           setOrders(response.data);
//           setLoadingOrders(false);
//         })
//         .catch(error => {
//           console.error('Lỗi khi lấy danh sách đơn hàng:', error);
//           setLoadingOrders(false);
//         });
//     } else {
//       console.error('Không tìm thấy user trong localStorage');
//       setLoadingUser(false);
//       setLoadingOrders(false);
//     }
//   }, []);

//   return (
//     <div className="p-4 bg-gray-100 text-gray-900">
//       <h1 className="text-2xl mb-4">Thông tin tài khoản</h1>
      
//       {loadingUser ? (
//         <p>Đang tải thông tin người dùng...</p>
//       ) : user ? (
//         <div className="bg-white p-4 rounded shadow-md mb-4">
//           <p><strong>Tên:</strong> {user.username}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>Địa chỉ:</strong> {user.default_shipping_address}</p>
//           <p><strong>Số điện thoại:</strong> {user.phone}</p>
//         </div>
//       ) : (
//         <p>Không có thông tin người dùng.</p>
//       )}

//       <h2 className="text-xl mt-4 mb-2">Danh sách đơn hàng đã đặt</h2>
      
//       {loadingOrders ? (
//         <p>Đang tải danh sách đơn hàng...</p>
//       ) : orders.length > 0 ? (
//         <table className="w-full bg-white shadow-md rounded">
//           <thead>
//             <tr className="border-b">
//               <th className="p-3 text-left">Mã đơn hàng</th>
//               <th className="p-3 text-left">Ngày đặt hàng</th>
//               <th className="p-3 text-left">Trạng thái</th>
//               <th className="p-3 text-left">Địa chỉ giao hàng</th>
//               <th className="p-3 text-left">Tổng tiền</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map(order => (
//               <tr key={order.id} className="border-b hover:bg-gray-50">
//                 <td className="p-3">{order.tracking_number}</td>
//                 <td className="p-3">{new Date(order.order_date).toLocaleDateString()}</td>
//                 <td className="p-3">
//                   {order.order_status === 0 ? "Chờ xác nhận" : 
//                    order.order_status === 1 ? "Đã đặt hàng" :
//                    order.order_status === 2 ? "Đang giao" :
//                    order.order_status === 3 ? "Đã giao" : 
//                    "Đã hủy"}
//                 </td>
//                 <td className="p-3">{order.shipping_address}</td>
//                 <td className="p-3">{order.total_fee} VND</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>Không có đơn hàng nào.</p>
//       )}
//     </div>
//   );
// }

// export default UserInfoPage;
