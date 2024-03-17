'use client';

import { navigationData } from '@/data/navigationData';
import { getSession } from '@/actions/getSession';
import { useEffect, useMemo, useState } from 'react';

import NavigationItem from './NavigationItem';
import { useRouter } from 'next/navigation';
import AddDepartmentModal from '../modals/AddDepartmentModal';
import EditProjectModal from '../modals/EditProjectModal';

const MainNavigation = () => {
  const router = useRouter();
  const session = useMemo(() => {
    const sessionData = getSession();
    return sessionData;
  }, []);

  const [data, setData] = useState(navigationData);

  useEffect(() => {
    if (!session) {
      setData((prevData) => prevData.filter((item) => item.isPublic));
    } else {
      setData((prevData) => prevData.filter((item) => !item.isPublic));
    }
  }, [session]);

  return (
    <>
      <EditProjectModal />
      <div className='h-24 border-b-[1px] border-white bg-codeCraft-900'>
        <nav className='m-auto flex h-full w-full max-w-[1200px] items-center justify-between '>
          <p
            className=' cursor-pointer px-5 text-4xl text-white'
            onClick={() => router.push('/')}
          >
            TEAM FINDER
          </p>
          <ul className='flex gap-14'>
            {data?.map((item) => (
              <NavigationItem key={item.title} data={item} />
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MainNavigation;
