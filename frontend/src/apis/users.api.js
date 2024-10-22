import axiosClient from './axiosClient';

export const usersApi = {
  getUsers: async (params) => {
    const url = 'users';
    return axiosClient.get(url, { params });
  },

  getUserById: async (id) => {
    const url = `users/${id}`;
    return axiosClient.get(url);
  },

  addUser: async (data) => {
    const url = 'users';
    return axiosClient.post(url, data);
  },

  updateUser: async (id, data) => {
    const url = `users/${id}`;
    return axiosClient.put(url, data);
  },

  deleteUser: async (id) => {
    const url = `users/${id}`;
    return axiosClient.delete(url);
  },
};
