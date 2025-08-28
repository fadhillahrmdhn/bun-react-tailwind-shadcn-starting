import type { ThemeContextType } from '@/interfaces';
import  type {theme, ThemeStorageKey} from '@/types';
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const themeStorageKey: ThemeStorageKey = 'theme';

export const ThemeProvider = ({children}:{children:ReactNode}) =>{

    const getDefaultTheme = () : theme =>  {
        if ( typeof window !== "undefined" && localStorage.getItem(themeStorageKey)) {
            return localStorage.getItem(themeStorageKey) as theme;
        }
        return "light";
    }

 const [theme, setTheme] = useState<theme>(getDefaultTheme());


 const setLocalStorageTheme = (theme:theme) => {
    if(typeof window !== "undefined") {
    localStorage.setItem(themeStorageKey, theme);
    }
 }


 const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark":"light" ));
    setLocalStorageTheme(theme === "light" ? "dark":"light");
    document.documentElement.classList.toggle("dark");
 };

 useEffect(() => {
    setLocalStorageTheme(theme);
 }, []);

 const value = useMemo(()=>({theme, toggleTheme}),[theme]);

 return (
    <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
 );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
