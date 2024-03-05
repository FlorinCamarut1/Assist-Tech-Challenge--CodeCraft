import { NavigationTypes } from '@/types';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';
import Link from 'next/link';

interface NavigationItem {
  data: NavigationTypes;
}

const NavigationItem = ({ data }: NavigationItem) => {
  const pathname = usePathname();
  const active = pathname === data?.href;

  return (
    <div
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
