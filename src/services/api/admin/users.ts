import axiosInstance from '../axiosInstance';

// Tipe data User sesuai struktur dari MockAPI
export interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  password: string;
  role: string;
  isActive: string;
  avatar: string;
  createdAt?: string;
}

// Untuk pembuatan / update user
export interface UserPayload {
  username: string;
  name: string;
  email: string;
  password: string;
  role: string;
  isActive: string;
}

const resource = '/users';

const usersApi = {
  getAll: () => axiosInstance.get<User[]>(resource),
  getById: (id: string) => axiosInstance.get<User>(`${resource}/${id}`),
  create: (data: UserPayload) => axiosInstance.post<User>(resource, data),
  update: (id: string, data: Partial<UserPayload>) =>
    axiosInstance.put<User>(`${resource}/${id}`, data),
  remove: (id: string) => axiosInstance.delete<void>(`${resource}/${id}`),
};

export default usersApi;
