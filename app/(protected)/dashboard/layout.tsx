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
      <h1 className='px-20 py-7 font-Raleway text-4xl font-semibold'>
        Welcome to organization Dashboard
      </h1>
      <div className='flex h-full w-full gap-16 px-20 py-10'>
        <Sidebar />
        <div className='flex-1'>{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
