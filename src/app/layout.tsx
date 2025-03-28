'use client';

import { ThemeProvider, CssBaseline, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { getTheme } from '../styles/theme';
import React from 'react';
import { ETheme } from '@/utils/constants/theme.enum';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [themeMode, setThemeMode] = useState<ETheme.LIGHT | ETheme.DARK>(
    ETheme.LIGHT
  );

  // Cargar el tema desde localStorage para que persista entre sesiones
  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode') as
      | ETheme.LIGHT
      | ETheme.DARK
      | null;
    if (savedMode) {
      setThemeMode(savedMode);
    }
  }, []);

  const toggleTheme = () => {
    const newThemeMode =
      themeMode === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT;
    setThemeMode(newThemeMode);
    localStorage.setItem('themeMode', newThemeMode); // Guardar la preferencia en localStorage
  };

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={getTheme(themeMode)}>
          <CssBaseline />
          {children}
          <Button
            onClick={toggleTheme}
            style={{
              position: 'fixed',
              borderRadius: '20px',
              width: '3rem',
              height: '3rem',
              bottom: '20px',
              right: '20px',
              zIndex: 999,
            }}
            variant="contained"
          >
            {themeMode === ETheme.LIGHT ? '🌙' : '☀️'}
          </Button>
        </ThemeProvider>
      </body>
    </html>
  );
}
