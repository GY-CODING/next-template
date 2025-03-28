'use client';

import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';
import React from 'react';

interface ButtonProps extends MuiButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  return <MuiButton {...props} />;
};

export default Button;
