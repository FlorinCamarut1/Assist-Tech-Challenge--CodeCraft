'use client';

import { SidebarNavTypes } from '@/types';
import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';

interface SidebarNavItemProps {
  item: SidebarNavTypes;
}
const SidebarNavItem = ({ item }: SidebarNavItemProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const Icon = item.icon;
  const active = pathname === item.href;

  const onClick = () => {
    router.push(item.href);
  };
  return (
    <div
      className={clsx(
        `cursor-pointer p-5 hover:bg-slate-200`,
        active ? 'bg-slate-100' : ''
      )}
      onClick={onClick}
    >
      <div className='flex gap-3'>
        <Icon size={20} color='#414959' />
        <p className='text-codeCraft-500 font-semibold'>{item.title}</p>
      </div>
    </div>
  );
};

export default SidebarNavItem;
