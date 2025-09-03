import { Moon, Sun, SunMoon } from "lucide-react";
import { useState } from 'react';
import { useTheme } from '~/components/themeProvider';
import { THEMES } from '~/components/themeProvider/useTheme.ts';
import { Button, type UiButtonProps } from "~ui/button.tsx";
import { Tooltip, TooltipContent, TooltipTrigger } from '~ui/tooltip.tsx';


const ThemeToggle = (props: UiButtonProps) => {
  const { theme, setTheme } = useTheme();
  const [themeIndex, setThemeIndex] = useState(() => {
    const i = THEMES.indexOf(theme);
    return i >= 0 ? i : 0;
  });

  const toggleTheme = () => {
    const newIndex = (themeIndex + 1) % THEMES.length;
    setThemeIndex(newIndex);
    setTheme(THEMES[newIndex]);
  };

  const [Icon, themeName] = (() => {
    switch (theme) {
      case "dark":
        return [Moon, 'escuro'];
      case "light":
        return [Sun, 'claro'];
      default:
        return [SunMoon, 'sistema'];
    }
  })();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon" onClick={toggleTheme} {...props}>
          <Icon />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        Tema: {themeName}
      </TooltipContent>
    </Tooltip>
  );
};

export default ThemeToggle;
