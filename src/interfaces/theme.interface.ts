import type {theme} from '../types';

export interface ThemeContextType {
  theme: theme;
  toggleTheme: () => void;
}