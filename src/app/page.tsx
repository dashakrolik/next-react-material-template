'use client';

import { Box, Paper, Typography, useTheme } from '@mui/material';
import ThemeToggle from './components/ThemeToggle';

export default function Home() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
        position: 'relative',
      }}
    >
      <Box position="absolute" top={16} right={16}>
        <ThemeToggle />
      </Box>

      <Paper
        elevation={0}
        sx={{
          maxWidth: 600,
          width: '100%',
          px: 4,
          py: 6,
          // glassmorphism
          backdropFilter: theme.palette.mode === 'dark' 
            ? 'blur(40px) saturate(180%)' 
            : 'blur(20px)',
          WebkitBackdropFilter: theme.palette.mode === 'dark' 
            ? 'blur(40px) saturate(180%)' 
            : 'blur(20px)',
          backgroundColor: theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, 0.02)'
            : 'rgba(255, 255, 255, 0.25)',
          border: theme.palette.mode === 'dark'
            ? '1px solid rgba(255, 255, 255, 0.08)'
            : '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: 3,
          boxShadow: theme.palette.mode === 'dark'
            ? `
                0 8px 32px rgba(0, 0, 0, 0.4),
                0 0 0 1px rgba(255, 255, 255, 0.05),
                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                inset 0 -1px 0 rgba(0, 0, 0, 0.2)
              `
            : `
                0 8px 32px rgba(0, 0, 0, 0.1),
                0 0 0 1px rgba(255, 255, 255, 0.2)
              `,
          background: theme.palette.mode === 'dark'
            ? `
                linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.03) 0%, 
                  rgba(255, 255, 255, 0.01) 100%
                ),
                rgba(255, 255, 255, 0.02)
              `
            : 'rgba(255, 255, 255, 0.25)',
          color: theme.palette.text.primary,
          position: 'relative',
          overflow: 'hidden',
          '&::before': theme.palette.mode === 'dark' ? {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.03), transparent)',
            animation: 'shimmer 3s infinite',
            zIndex: 1,
          } : {},
          '& > *': {
            position: 'relative',
            zIndex: 2,
          },
          // hover effects
          transition: 'all 0.3s ease-in-out',
          '&:hover': theme.palette.mode === 'dark' ? {
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            borderColor: 'rgba(255, 255, 255, 0.12)',
            transform: 'translateY(-2px)',
            boxShadow: `
              0 12px 40px rgba(0, 0, 0, 0.5),
              0 0 0 1px rgba(255, 255, 255, 0.08),
              inset 0 1px 0 rgba(255, 255, 255, 0.15),
              inset 0 -1px 0 rgba(0, 0, 0, 0.3)
            `,
          } : {
            transform: 'translateY(-2px)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
          },
        }}
      >
        <Typography variant="h3" fontWeight={200} gutterBottom>
          Next.js + MUI + Auth Boilerplate
        </Typography>

        <Typography
          variant="body1"
          fontWeight={200}
          fontSize="1.1rem"
          lineHeight={1.8}
          mb={3}
        >
          This project is a modern Next.js 14+ boilerplate built with:
        </Typography>

        <ul>
          <li>TypeScript & App Router</li>
          <li>Material UI with dark/light theme support</li>
          <li>Google Fonts (Rubik, monospace)</li>
          <li>NextAuth.js pre‑configured with SessionProvider</li>
          <li>Collapsible sidebar with routing (coming next)</li>
          <li>Deployment‑ready structure (Vercel, SSR‑safe)</li>
        </ul>

        <Typography variant="body1" fontWeight={200} textAlign="center" mt={4}>
          - Built by @dashakrolik, styled with MUI.
        </Typography>
      </Paper>
    </Box>
  );
}