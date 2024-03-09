'use client';
import { NavigationTypes } from '@/types';
import { usePathname, useRouter } from 'next/navigation';
import { logOut } from '@/actions/logOut';

import clsx from 'clsx';
import Link from 'next/link';

interface NavigationItem {
  data: NavigationTypes;
}

const NavigationItem = ({ data }: NavigationItem) => {
  const router = useRouter();
  const pathname = usePathname();
  const active = pathname === data?.href;

  const clickHandler = () => {
    if (data?.onClick && data.title === 'Logout') {
      logOut();
      router.push('/');
    }
  };

  return (
    <div
      onClick={clickHandler}
      className={clsx(
        ` cursor-pointer border-b-2  p-2 transition hover:border-gray-100`,
        active ? 'border-gray-100' : 'border-codeCraft-900'
      )}
    >
      <Link href={data.href} className=' text-lg text-white '>
        {data.title}
      </Link>
    </div>
  );
};

export default NavigationItem;
