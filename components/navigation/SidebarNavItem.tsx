'use client';

import { getSession } from '@/actions/getSession';
import { getSystemRolesById } from '@/lib/getSystemRolesById';
import { SidebarNavTypes } from '@/types';
import { usePathname, useRouter } from 'next/navigation';
import useUserById from '@/hooks/users/useUserById';

import clsx from 'clsx';
import useSystemRoles from '@/hooks/system-roles/useSystemRoles';

interface SidebarNavItemProps {
  item: SidebarNavTypes;
}
const SidebarNavItem = ({ item }: SidebarNavItemProps) => {
  const session = getSession();
  const { data: currentUserData } = useUserById(session?.id);
  const { data: systemRoles } = useSystemRoles();
  const roles = getSystemRolesById(systemRoles, currentUserData?.systemRoleIDs);

  const pathname = usePathname();
  const router = useRouter();
  const Icon = item.icon;
  const active = pathname === item.href;

  const onClick = () => {
    router.push(item.href);
  };

  function hasMatchingRole(rolesData: any, targetRoles: any) {
    for (const role of rolesData) {
      if (targetRoles.includes(role)) {
        return true;
      }
    }
    return false;
  }
  const hasRole = hasMatchingRole(item.role, roles);

  if (!hasRole) return;

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
        <p className='font-semibold text-codeCraft-500'>{item.title}</p>
      </div>
    </div>
  );
};

export default SidebarNavItem;
