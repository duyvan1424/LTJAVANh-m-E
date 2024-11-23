import React from 'react';
import Header from '../components/layout/header';

function UserManagement() {
  return (
    <div className="text-gray-900 bg-red-200">
      <div><Header /></div>
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
            {/* Static mock users */}
            <tr className="border-b hover:bg-orange-100 bg-pink-100">
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="John Doe"
                  className="bg-transparent border-b-2 border-gray-300 py-2 w-full"
                  readOnly
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="john@example.com"
                  className="bg-transparent border-b-2 border-gray-300 py-2 w-full"
                  readOnly
                />
              </td>
              <td className="p-3 px-5">
                <select
                  value="1"
                  className="bg-transparent border-b-2 border-gray-300 py-2 w-full"
                  disabled
                >
                  <option value="0">customer</option>
                  <option value="1">staff</option>
                  <option value="2">Sếp</option>
                </select>
              </td>
              <td className="p-3 px-5 flex justify-end">
                <button
                  className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  disabled
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr className="border-b hover:bg-orange-100 bg-pink-100">
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="Jane Smith"
                  className="bg-transparent border-b-2 border-gray-300 py-2 w-full"
                  readOnly
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="jane@example.com"
                  className="bg-transparent border-b-2 border-gray-300 py-2 w-full"
                  readOnly
                />
              </td>
              <td className="p-3 px-5">
                <select
                  value="0"
                  className="bg-transparent border-b-2 border-gray-300 py-2 w-full"
                  disabled
                >
                  <option value="0">customer</option>
                  <option value="1">staff</option>
                  <option value="2">Sếp</option>
                </select>
              </td>
              <td className="p-3 px-5 flex justify-end">
                <button
                  className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  disabled
                >
                  Delete
                </button>
              </td>
            </tr>
            {/* Add more mock users as needed */}
            <tr>
              <td colSpan="4" className="text-center p-3">Không có người dùng nào.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-end p-4">
        <button
          className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled
        >
          Save All Changes
        </button>
      </div>
    </div>
  );
}

export default UserManagement;
