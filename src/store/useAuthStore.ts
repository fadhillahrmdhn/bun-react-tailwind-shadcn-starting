import { create } from 'zustand';
import { api2 } from '@/lib';
import Cookies from 'js-cookie';
import type { AuthMe, AuthState, AuthUser, LoginFormValues, LoginResponse } from '@/interfaces';
import type { CookieType, ThemeStorageKey,  } from '@/types';

const cookieName: CookieType = 'accessToken';
const themeStorageKey: ThemeStorageKey = 'theme';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true,
  isAuthenticated: false,
  setLoading: (loading: boolean) => {
    set({ isLoading: loading });
  },
  login: async ({ value }: { value: LoginFormValues }): Promise<LoginResponse> => {
    // 1. Set status loading menjadi true untuk menampilkan UI loading
    set({ isLoading: true });
    try {
      // 2. Kirim kredensial pengguna ke endpoint /auth/login
      const res = await api2.post<LoginResponse>('/auth/login', value);
      // 3. Ekstrak token dan waktu kedaluwarsa dari respons server
      const token: string = res.data.data.accessToken;
      const expires: string = res.data.data.expiresIn;

      // 4. Hitung tanggal kedaluwarsa cookie dari string (misal: "1d", "7h")
      const expirationDate = new Date();
      const valueInSeconds = parseInt(expires);

      if (expires.endsWith('d')) {
        expirationDate.setDate(expirationDate.getDate() + valueInSeconds);
      } else if (expires.endsWith('h')) {
        expirationDate.setHours(expirationDate.getHours() + valueInSeconds);
      } else if (expires.endsWith('m')) {
        expirationDate.setMinutes(expirationDate.getMinutes() + valueInSeconds);
      }

      // 5. Simpan token di cookie browser
      Cookies.set(cookieName, token, { expires: expirationDate, path: '/' });

      // 6. Setelah token disimpan, ambil data profil pengguna dari endpoint /auth/me
      const response = await api2.get<AuthMe>('/auth/me');
      const user: AuthUser = response.data.data;

      // 7. Jika berhasil, perbarui state global sebagai "sudah login"
      set({ user, isAuthenticated: true });
      return res.data;
    } catch (error) {
      // 8. Jika terjadi error (misal: login gagal), bersihkan state
      Cookies.remove(cookieName);
      set({ user: null, isAuthenticated: false });
      throw new Error(error.response?.data?.message || 'Login failed');
    } finally {
      // 9. Apapun hasilnya (berhasil atau gagal), set loading menjadi false
      set({ isLoading: false });
    }
  },
  checkAuth: async () => {
    // 1. Ambil token dari cookie browser.
    const token = Cookies.get(cookieName);

    // 2. Jika tidak ada token, pengguna belum login.
    if (!token) {
      // Langsung atur state menjadi tidak terotentikasi dan hentikan loading.
      set({ user: null, isAuthenticated: false, isLoading: false });
      return;
    }

    // 3. Jika token ditemukan, set status loading menjadi true.
    set({ isLoading: true });
    try {
      // 4. Verifikasi token dengan cara mengambil data pengguna dari endpoint /auth/me.
      const response = await api2.get<AuthMe>('/auth/me');
      const user: AuthUser = response.data.data;
      // 5. Jika berhasil, perbarui state global sebagai "sudah login".
      set({ user, isAuthenticated: true });
    } catch (error) {
      // 6. Jika gagal (misal: token tidak valid), hapus token yang salah dari cookie.
      Cookies.remove(cookieName);
      // Atur ulang state menjadi tidak terotentikasi.
      set({ user: null, isAuthenticated: false });
      throw error;
    } finally {
      // 7. Apapun hasilnya (berhasil atau gagal), set loading menjadi false.
      set({ isLoading: false });
    }
  },

  logout: () => {
    // 1. Hapus token otentikasi dari cookie browser.
    Cookies.remove(cookieName);
    localStorage.removeItem(themeStorageKey);

    // 2. Atur ulang state otentikasi di Zustand ke kondisi awal (tidak login).
    set({
      user: null,           // Hapus data pengguna dari state.
      isAuthenticated: false, // Tandai bahwa pengguna tidak lagi terotentikasi.
      isLoading: false,       // status loading dimatikan.
    });
  },

}));
