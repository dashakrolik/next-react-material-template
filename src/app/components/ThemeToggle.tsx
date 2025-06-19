'use client';

import { IconButton } from '@mui/material';
import { useThemeMode } from '@/app/providers';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function ThemeToggle() {
  const { mode, toggleColorMode } = useThemeMode();

  return (
    <IconButton onClick={toggleColorMode} color="inherit">
      {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}
