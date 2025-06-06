// src/store.ts
import { create } from 'zustand';
import usersApi, { User } from '@/services/api/admin/users';

interface UserStore {
  users: User[];
  selectedUser: User | null;
  loading: boolean;
  error: string | null;

  fetchUsers: () => Promise<void>;
  fetchUserById: (id: string) => Promise<void>;
}

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  selectedUser: null,
  loading: false,
  error: null,

  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const response = await usersApi.getAll();
      set({ users: response.data, loading: false });
    } catch (err: unknown) {
      const errorMessage = (err && typeof err === 'object' && 'message' in err) ? (err as { message?: string }).message : undefined;
      set({ error: errorMessage || 'Gagal memuat data user', loading: false });
    }
  },

  fetchUserById: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const response = await usersApi.getById(id);
      set({ selectedUser: response.data, loading: false });
    } catch (err: unknown) {
      const errorMessage = (err && typeof err === 'object' && 'message' in err) ? (err as { message?: string }).message : undefined;
      set({ error: errorMessage || 'Gagal memuat data user', loading: false });
    }
  },
}));
