import { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const themes = [
  { name: 'Blue', class: 'theme-blue' },
  { name: 'Dark', class: '' },
  { name: 'Purple', class: 'theme-purple' },
  { name: 'Green', class: 'theme-green' },
  { name: 'Light', class: 'theme-light' },
];

export const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState('Blue');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme !== null) {
      const theme = themes.find(t => t.class === savedTheme) || themes[0];
      setCurrentTheme(theme.name);
      document.body.className = savedTheme;
    } else {
      // Set blue theme as default
      document.body.className = 'theme-blue';
      localStorage.setItem('portfolio-theme', 'theme-blue');
    }
  }, []);

  const changeTheme = (themeName: string, themeClass: string) => {
    setCurrentTheme(themeName);
    document.body.className = themeClass;
    localStorage.setItem('portfolio-theme', themeClass);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Palette className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32">
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.name}
            onClick={() => changeTheme(theme.name, theme.class)}
            className={currentTheme === theme.name ? 'bg-accent text-accent-foreground' : ''}
          >
            {theme.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
