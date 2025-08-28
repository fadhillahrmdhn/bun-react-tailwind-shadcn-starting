import { use } from 'react';
import { RoleEnum } from '@/enums';

export interface Meta {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
}

export interface UserEntity {
  id: string;
  name: string;
  email: string;
  role: RoleEnum;
}

export interface UserData {
  entities: UserEntity[];
  meta: Meta;
}

export interface GetAllUserResponse {
  message: string;
  statusCode: number;
  timestamp: string;
  data: UserData;
}

export interface UserStore {
  users: UserEntity[];
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  getUsers: (page: number, limit: number) => Promise<GetAllUserResponse>;
}
