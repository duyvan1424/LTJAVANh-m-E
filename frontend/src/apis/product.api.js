import axiosClient from "./axiosClient";

export const productApi = {
  getProducts: async (params) => {
    const url = "product";
    return axiosClient.get(url, { params });
  },
};
