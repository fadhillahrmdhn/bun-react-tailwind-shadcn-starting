import type { UserStore, GetAllUserResponse, UserEntity } from '@/interfaces';
import { create } from 'zustand';
import { api2 } from '@/lib';

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  isLoading: false,
  setLoading: (loading: boolean) => set({ isLoading: loading }),
  getUsers: async (page: number, limit: number): Promise<GetAllUserResponse> => {
    set({ isLoading: true });
    try {
      const response = await api2.get<GetAllUserResponse>('/user', {
        params: {
          isPagination: true,
          page: page,
          limit: limit,
        },
      });
      const data = response.data;
      set({ users: data.data.entities });
      return data;
    } catch (error) {
      console.error('Failed to fetch users:', error);
       throw error;
    } finally {
      set({ isLoading: false });
    }
  },
}));
