import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { AccountPopover } from './components/AccountPopover';


export default function Layout() {
  return (
    <DashboardLayout
      slots={{
        toolbarAccount: AccountPopover}}
    >
      <PageContainer>
        <Outlet />
      </PageContainer>
    </DashboardLayout>
  );
}
