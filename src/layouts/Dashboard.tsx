import * as React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { AccountPopover } from './components/AccountPopover';
import { varAlpha } from '../theme/styles';
import { lightPalette as palette } from '../theme/core/palette';
// import { useSession } from '@toolpad/core';
import { useSession } from '../SessionContext';

export default function Layout() {
  const { session , setSession} = useSession() as TODO;
  const location = useLocation() as TODO;

  // if (!session && (location.pathname !== '/' && location.pathname !== '')) {
  //   // Add the `callbackUrl` search parameter
  //   // const redirectTo = `/sign-in?callbackUrl=${enco  deURIComponent(location.pathname)}`;
  //   // navigate(redirectTo);
  //   return <Navigate to={"sign-in"} replace />;
  // } else {
  //   setSession(session)
  // }

  return (
    <DashboardLayout sx={{ backgroundColor: varAlpha(palette.grey['500Channel'], 0.08) }}
      slots={{
        toolbarAccount: AccountPopover
      } as TODO}
    >
      <PageContainer title="" breadcrumbs={[]} >
        <Outlet />
      </PageContainer>
    </DashboardLayout>
  );
}
