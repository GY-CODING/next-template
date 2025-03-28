import Box from '@mui/material/Box';
import Button from './components/atoms/Button';
import React from 'react';

export default function Home() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <h1>
        Welcome to{' '}
        <Box component="span" sx={{ fontWeight: '800' }} color={'primary.main'}>
          GYCODING
        </Box>{' '}
        Next.js Template
      </h1>
      <Button variant="contained" color="primary">
        Click me!
      </Button>
    </main>
  );
}
