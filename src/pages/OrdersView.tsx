import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

export default function OrdersPage() {
  const theme = useTheme();

  console.log(theme);

  

  return <Typography>Welcome to the Toolpad orders!</Typography>;
}

