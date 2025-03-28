'use client';

import { ETheme } from '@/utils/constants/theme.enum';
import { createTheme } from '@mui/material/styles';

// Función para crear un tema dinámico
export const getTheme = (mode: ETheme.LIGHT | ETheme.DARK) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#8C54FF',
      },
      secondary: {
        main: '#FF0000',
      },
    },
    typography: {
      fontFamily: 'Arial, sans-serif',
    },
  });
