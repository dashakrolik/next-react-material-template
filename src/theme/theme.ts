import { createTheme, ThemeOptions } from '@mui/material/styles'

export const getTheme = (mode: 'light' | 'dark'): ThemeOptions =>
  createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            background: {
              default: '#fafafa',
              paper: '#ffffff',
            },
          }
        : {
            background: {
              default: 'transparent',
              paper: 'rgba(255,255,255,0.05)',
            },
          }),
    },
    typography: {
      fontFamily: 'Rubik, monospace',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '*': {
            boxSizing: 'border-box',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backdropFilter: mode === 'dark' ? 'blur(10px)' : 'none',
            border: mode === 'dark' ? '1px solid rgba(255,255,255,0.1)' : 'none',
          },
        },
      },
    }
  })