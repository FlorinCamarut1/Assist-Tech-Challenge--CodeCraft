import { NavigationTypes } from '@/types';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';
import Link from 'next/link';

interface NavigationItem {
  data: NavigationTypes;
}

const NavigationItem = ({ data }: NavigationItem) => {
  const pathname = usePathname();
  const active = pathname === data.href;

  return (
    <li
      className={clsx(
        ` cursor-pointer border-b-2 border-transparent  p-2 transition hover:border-blue-200`,
        active && 'border-gray-200'
      )}
    >
      <Link
        href={data.href}
        className=' text-lg text-white  hover:text-blue-200'
      >
        {data.title}
      </Link>
    </li>
  );
};

export default NavigationItem;
