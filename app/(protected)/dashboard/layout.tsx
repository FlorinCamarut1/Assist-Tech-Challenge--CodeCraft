'use client';

import MainNavigation from '@/components/navbar/MainNavigation';
import Sidebar from '@/components/navbar/Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <MainNavigation />
      <div className='flex h-screen w-screen'>
        <Sidebar />
        <div>{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
