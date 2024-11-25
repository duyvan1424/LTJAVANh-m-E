import React, { useState, useEffect } from 'react';
import Header from '../components/layout/header';
import axios from 'axios';

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch the list of users when the component loads
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('http://localhost:8080/api/users');
        console.log('Response data:', response.data); // Kiểm tra dữ liệu trả về
        setUsers(Array.isArray(response.data) ? response.data : []); // Đảm bảo là mảng
      } catch (error) {
        console.error('Error fetching users:', error);
        setMessage('Unable to load user data.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleChange = (id, field, value) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, [field]: value } : user
      )
    );
  };

  const handleSave = async (user) => {
    try {
      setIsLoading(true);
      // Update user in the database
      await axios.put(`http://localhost:8080/api/users/${user.id}`, user);
      setMessage(`Tài khoản ${user.username} cập nhật thành công!`);
    } catch (error) {
      console.error('Error updating user:', error);
      setMessage(`Cập nhật thất bại ${user.username}.`);
    } finally {
      setIsLoading(false);
    }
    alert(message);
  };


  return (
    <div className="text-gray-900 bg-red-200">
      <div><Header /></div>
      <div className="p-4 flex">
        <h1 className="text-3xl">Users</h1>
      </div>
      <div className="px-3 py-4 flex justify-center">
        <table className="w-64 text-md bg-white shadow-md rounded mb-4" style={{ minWidth: '800px' }}>
          <thead>
            <tr className="border-b">
              <th className="text-left p-3 px-5 w-1/4">Name</th>
              <th className="text-left p-3 px-5 w-1/4">Email</th>
              <th className="text-left p-3 px-5 w-1/4">Role</th>
              <th className="text-left p-3 px-5 w-1/4"></th>
            </tr>
          </thead>
          {/* Static mock users */}
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-orange-100 bg-pink-100">
                  <td className="p-3 px-5">
                    <input type="hidden" value={user.id} />
                    <input
                      type="text"
                      value={user.username}
                      onChange={(e) => handleChange(user.id, 'username', e.target.value)}
                      className="bg-transparent border-b-2 border-gray-300 py-2 w-full"
                    />
                  </td>
                  <td className="p-3 px-5">
                    <input
                      type="text"
                      value={user.email}
                      onChange={(e) => handleChange(user.id, 'email', e.target.value)}
                      className="bg-transparent border-b-2 border-gray-300 py-2 w-full"
                    />
                  </td>
                  <td className="p-3 px-5">
                    <select
                      value={user.role}
                      onChange={(e) => handleChange(user.id, 'role', parseInt(e.target.value))}
                      className="bg-transparent border-b-2 border-gray-300 py-2 w-full"
                    >
                      <option value="0">customer</option>
                      <option value="1">staff</option>
                      <option value="2">Sếp</option>
                    </select>
                  </td>
                  <td className="p-3 px-5 flex justify-end">
                    <button
                      onClick={() => handleSave(user)}
                      className="text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Lưu
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-3">Không có người dùng nào.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default UserManagement;
