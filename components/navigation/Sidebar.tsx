'use client';
import { getSession } from '@/actions/getSession';

import { currentSystemRoles } from '@/lib/currentSystemRoles';

import AdminInviteBox from './AdminInviteBox';
import SidebarMenu from './SidebarMenu';

import useUserById from '@/hooks/users/useUserById';

const Sidebar = () => {
  const session = getSession();
  const { data: currentUserData } = useUserById(session?.id);
  const role = currentSystemRoles(currentUserData?.systemRoleIDs);

  return (
    <div className=' flex w-full max-w-[400px] flex-col gap-12'>
      <SidebarMenu />
      {role?.isAdmin && (
        <AdminInviteBox organizationId={session.organizationID} />
      )}
    </div>
  );
};

export default Sidebar;
