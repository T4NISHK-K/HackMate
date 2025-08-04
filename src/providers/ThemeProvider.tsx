import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: string;
};

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
}: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  // Ensure theme is only applied after mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);

    // Load theme from localStorage on initial mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      // We'll let next-themes handle this via storageKey
      // This is just a fallback for initial load
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
      document.documentElement.classList.toggle('light', savedTheme === 'light');
    }
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme={defaultTheme} 
      enableSystem 
      storageKey="theme" // This ensures theme is saved to localStorage
    >
      {children}
    </NextThemesProvider>
  );
}