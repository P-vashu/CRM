import * as React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ContactsIcon from '@mui/icons-material/Contacts';
import { Outlet } from 'react-router-dom';
import { AppProvider } from '@toolpad/core/react-router-dom';
import { createTheme } from '@mui/material/styles';
import logoSvg  from '../public/assets/icons/workspaces/it-logo.svg';
import { type Navigation } from '@toolpad/core/AppProvider';


const CALLS_NAVIGATION: Navigation = [
  {
    segment: 'blogs',
    title: 'Blogs',
    icon: <NewspaperIcon />,
  },
  {
    segment: 'users',
    title: 'Users',
    icon: <PeopleAltIcon />,
  }
];


const NAVIGATION: Navigation = [
  // {
  //   kind: 'header',
  //   title: 'Main items',
  // },
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
    icon: <Inventory2Icon />,
  },
  {
    segment: 'customers',
    title: 'Customers',
    icon: <ContactsIcon />,
  },
  {
    kind: 'divider',

  },
  {
    segment: 'header',
    title: 'Market & Sales',
    // icon: <StorefrontIcon />,
  },
  {
    kind: 'divider',

  },

  {
    segment: 'blogs',
    title: 'Blogs',
    icon: <NewspaperIcon />,
  },
  {
    segment: 'users',
    title: 'Users',
    icon: <PeopleAltIcon />,
  }
  // {
  //   segment: 'blogs',
  //   title: 'Blogs',
  //   icon: <NewspaperIcon />,
  // },
  // {
  //   segment: 'users',
  //   title: 'Users',
  //   icon: <PeopleAltIcon />,
  // },
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
    colorSchemes: { light: true, dark: true },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 600,
        lg: 1408,
        xl: 1530,
      },
    },
});

export default function App() {
  return (
    <AppProvider theme={theme}
     navigation={NAVIGATION}  
     branding={BRANDING}
     >
      <Outlet />
    </AppProvider>
  );
}
