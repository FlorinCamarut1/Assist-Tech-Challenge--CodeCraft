'use client';
import { getSession } from '@/actions/getSession';
import { useValidateSystemRoles } from '@/context/UserSessionRolesContext';

import AdminInviteBox from './AdminInviteBox';
import SidebarMenu from './SidebarMenu';

const Sidebar = () => {
  const session = getSession();

  const role = useValidateSystemRoles();
  const adminRole = role.state.isAdmin;

  return (
    <div className=' flex w-full max-w-[400px] flex-col gap-12'>
      <SidebarMenu />
      {adminRole && <AdminInviteBox organizationId={session.organizationID} />}
    </div>
  );
};

export default Sidebar;
