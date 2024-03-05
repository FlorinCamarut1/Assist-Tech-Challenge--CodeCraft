'use client';
import { navigationData } from '@/data/navigationData';

import NavigationItem from './NavigationItem';

const MainNavigation = () => {
  const data = navigationData;

  return (
    <div className='h-24 border-b-[1px] border-white bg-codeCraft-900'>
      <nav className='m-auto flex h-full w-full max-w-[1200px] items-center justify-between '>
        <p className=' px-5 text-4xl text-white'>TEAM FINDER</p>
        <ul className='flex gap-14'>
          {data?.map((item) => <NavigationItem key={item.title} data={item} />)}
        </ul>
      </nav>
    </div>
  );
};

export default MainNavigation;
