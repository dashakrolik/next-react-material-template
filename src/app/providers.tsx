'use client';

import { SessionProvider } from 'next-auth/react';
import { createContext, useContext, useMemo, useState } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { getTheme } from '@/theme/theme';

type Mode = 'light' | 'dark';

interface ThemeContextType {
  mode: Mode;
  toggleColorMode: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: 'light',
  toggleColorMode: () => {},
});

export const useThemeMode = () => useContext(ThemeContext);

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>('light');

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <SessionProvider>
      <ThemeContext.Provider value={{ mode, toggleColorMode }}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </ThemeContext.Provider>
    </SessionProvider>
  );
}
