import { useContext } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { ThemeContext } from '@/shared/lib/theme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="ml-4"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
}