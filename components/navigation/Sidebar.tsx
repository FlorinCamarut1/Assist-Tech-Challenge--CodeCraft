'use client';
import { getSession } from '@/actions/getSession';

import AdminInviteBox from './AdminInviteBox';
import SidebarMenu from './SidebarMenu';
import useSystemRole from '@/hooks/useSystemRole';

const Sidebar = () => {
  const session = getSession();

  const role = useSystemRole(session?.systemRoleIDs[0]);
  const adminRole = role?.data?.name === 'Organization Administrator';

  return (
    <div className=' flex max-w-[400px] flex-col gap-12'>
      <SidebarMenu />
      {adminRole && <AdminInviteBox organizationId={session.organizationID} />}
    </div>
  );
};

export default Sidebar;
