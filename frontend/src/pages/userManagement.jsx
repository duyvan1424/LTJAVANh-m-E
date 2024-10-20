import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Nhập axios để thực hiện các yêu cầu HTTP

function UserManagement() {
  // State để quản lý danh sách người dùng
  const [users, setUsers] = useState([]);
  // State để theo dõi các thay đổi
  const [changedUsers, setChangedUsers] = useState({});

  // Lấy dữ liệu từ backend khi component được render lần đầu
  useEffect(() => {
    axios.get('http://localhost:3001/users') // Gọi API để lấy danh sách người dùng
      .then(response => {
        setUsers(response.data); // Lưu tất cả người dùng vào state
      })
      .catch(error => {
        console.error('Có lỗi xảy ra khi lấy dữ liệu:', error);
      });
  }, []); // Mảng rỗng [] để đảm bảo useEffect chỉ chạy một lần khi component mount

  // Hàm xử lý thay đổi giá trị đầu vào
  const handleInputChange = (e, userId, field) => {
    const updatedUsers = users.map(user => 
      user.id === userId ? { ...user, [field]: e.target.value } : user
    );
    setUsers(updatedUsers);

    // Cập nhật thay đổi vào state changedUsers
    setChangedUsers(prev => ({ ...prev, [userId]: { ...updatedUsers.find(user => user.id === userId) } }));
  };

  // Hàm xử lý lưu
  const handleSaveAll = () => {
    const savePromises = Object.keys(changedUsers).map(userId => {
      return axios.put(`http://localhost:3001/users/${userId}`, changedUsers[userId])
        .then(response => {
          console.log('Cập nhật người dùng thành công:', response.data);
        })
        .catch(error => {
          console.error('Có lỗi xảy ra khi cập nhật người dùng:', error);
        });
    });

    Promise.all(savePromises)
      .then(() => {
        console.log('Đã lưu tất cả người dùng.');
        setChangedUsers({}); // Đặt lại state changedUsers sau khi lưu thành công
      });
  };

  // Hàm xử lý xóa
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/users/${id}`) // Gọi API để xóa người dùng
      .then(() => {
        setUsers(users.filter(user => user.id !== id)); // Cập nhật state để loại bỏ người dùng đã xóa
        console.log('Đã xóa người dùng với id:', id);
      })
      .catch(error => {
        console.error('Có lỗi xảy ra khi xóa người dùng:', error);
      });
  };

  return (
    <div className="text-gray-900 bg-red-200">
      <div className="p-4 flex">
        <h1 className="text-3xl">Users</h1>
      </div>
      <div className="px-3 py-4 flex justify-center">
        <table className="w-64 text-md bg-white shadow-md rounded mb-4" style={{ minWidth: '800px' }}>
          <tbody>
            <tr className="border-b">
              <th className="text-left p-3 px-5 w-1/4">Name</th>
              <th className="text-left p-3 px-5 w-1/4">Email</th>
              <th className="text-left p-3 px-5 w-1/4">Role</th>
              <th className="text-left p-3 px-5 w-1/4"></th>
            </tr>
            {users.length > 0 ? users.map(user => (
              <tr key={user.id} className="border-b hover:bg-orange-100 bg-pink-100">
                <td className="p-3 px-5">
                  <input
                    type="text"
                    value={user.username}
                    onChange={(e) => handleInputChange(e, user.id, 'username')}
                    className="bg-transparent border-b-2 border-gray-300 py-2 w-full"
                  />
                </td>
                <td className="p-3 px-5">
                  <input
                    type="text"
                    value={user.email}
                    onChange={(e) => handleInputChange(e, user.id, 'email')}
                    className="bg-transparent border-b-2 border-gray-300 py-2 w-full"
                  />
                </td>
                <td className="p-3 px-5">
                  <select
                    value={user.role}
                    onChange={(e) => handleInputChange(e, user.id, 'role')}
                    className="bg-transparent border-b-2 border-gray-300 py-2 w-full"
                  >
                    <option value="0">customer</option>
                    <option value="1">staff</option>
                  </select>
                </td>
                <td className="p-3 px-5 flex justify-end">
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="4" className="text-center p-3">Không có người dùng nào.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end p-4">
          <button
            onClick={handleSaveAll}
            className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save All Changes
          </button>
        </div>
    </div>
  );
}

export default UserManagement;
