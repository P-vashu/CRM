import * as React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import { Outlet } from 'react-router-dom';
import { AppProvider, type Navigation } from '@toolpad/core/react-router-dom';
import { createTheme } from '@mui/material/styles';
import logoSvg  from '../public/assets/icons/workspaces/it-logo.svg';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
  },
  {
    segment: 'products',
    title: 'Products',
    icon: <ShoppingCartIcon />,
  },
  {
    segment: 'blogs',
    title: 'Blogs',
    icon: <Inventory2Icon />,
  },
];
const logo =   <img src={logoSvg} className="logo" alt="Vite logo" />
const BRANDING = {
  title: 'React Demo V3',
  logo
};

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: {
    light: true,
    dark: true,
  },
});

export default function App() {
  return (
    <AppProvider theme={theme} navigation={NAVIGATION}  branding={BRANDING}>
      <Outlet />
    </AppProvider>
  );
}
