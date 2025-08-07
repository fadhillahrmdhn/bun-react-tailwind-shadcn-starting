import { Button } from '../ui/button';
import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export const ButtonTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex justify-end lg:justify-start">
      <Button className="cursor-pointer flex" variant="outline" onClick={toggleTheme}>
        {theme === 'light' ? 
        (
          <>
            <Moon className="h-4 w-4" /> Light Mode
          </>
        ) : (
          <>
            <Sun className="h-4 w-4" /> Dark Mode
          </>
        )}
      </Button>
    </div>
  );
};
