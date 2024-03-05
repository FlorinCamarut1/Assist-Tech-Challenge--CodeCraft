'use client';

import MainNavigation from '@/components/navigation/MainNavigation';
import Sidebar from '@/components/navigation/Sidebar';

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
