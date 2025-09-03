import { type ReactNode, useEffect, useState } from "react";
import { type Theme, ThemeProviderContext, THEMES } from './useTheme.ts';


export interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

function strToTheme(txt?: string, fallback: Theme = 'system'): Theme {
  const castedTxt = txt as unknown as Theme;
  return THEMES.includes(castedTxt) ? castedTxt : fallback;
}

const ThemeProvider = (
  {
    children,
    defaultTheme = "system",
    storageKey = "app-theme",
    ...props
  }: ThemeProviderProps,
) => {
  const [theme, setTheme] = useState<Theme>(
    () => strToTheme(localStorage.getItem(storageKey) || '', defaultTheme),
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      const newTheme = strToTheme(theme);
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    },
  };

  return (
    <ThemeProviderContext {...props} value={value}>
      {children}
    </ThemeProviderContext>
  );
};

export default ThemeProvider;
