'use client';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#2563eb',
          light: '#60a5fa',
          dark: '#1e40af',
        },
        secondary: {
          main: '#7c3aed',
          light: '#a78bfa',
          dark: '#6d28d9',
        },
        background: {
          default: '#f8fafc',
          paper: '#ffffff',
        },
        text: {
          primary: '#0f172a',
          secondary: '#475569',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#3b82f6',
          light: '#60a5fa',
          dark: '#2563eb',
        },
        secondary: {
          main: '#8b5cf6',
          light: '#a78bfa',
          dark: '#7c3aed',
        },
        background: {
          default: '#0a0a0a',
          paper: '#171717',
        },
        text: {
          primary: '#f1f5f9',
          secondary: '#cbd5e1',
        },
      },
    },
  },
  defaultColorScheme: 'dark',
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: 'info' },
              style: {
                backgroundColor: '#60a5fa',
              },
            },
          ],
        },
      },
    },
  },
});

export default theme;
