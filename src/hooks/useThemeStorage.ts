import { useEffect } from 'react';
import { useTheme } from 'next-themes';

/**
 * A hook that synchronizes the theme with localStorage to persist theme preferences
 * across page navigations and browser sessions.
 */
export function useThemeStorage() {
  const { theme, setTheme } = useTheme();

  // Load theme from localStorage on initial mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [setTheme]);

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    if (theme) {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return { theme, setTheme };
}