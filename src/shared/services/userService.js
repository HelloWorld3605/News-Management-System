import axiosClient from "./axiosClient";

const resource = "/systemAccounts";

const userService = {
  getAll: () => {
    return axiosClient.get(resource);
  },
  getById: (id) => {
    return axiosClient.get(`${resource}/${id}`);
  },
  create: (data) => {
    return axiosClient.post(resource, data);
  },
  update: (id, data) => {
    return axiosClient.put(`${resource}/${id}`, data);
  },
  delete: (id) => {
    return axiosClient.delete(`${resource}/${id}`);
  },
  findByEmail: (email) => {
    return axiosClient.get(`${resource}?AccountEmail=${email}`);
  },
};

export default userService;
