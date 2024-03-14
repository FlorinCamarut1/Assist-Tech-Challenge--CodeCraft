'use client';

import { getSession } from '@/actions/getSession';
import MembersBox from '@/components/members/MembersBox';
import UserModal from '@/components/modals/UserModal';
import useUsers from '@/hooks/users/useUsers';
import React from 'react';

const MembersPage = () => {
  const session = getSession();
  const { data } = useUsers(session?.organizationID);
  return (
    <>
      <UserModal />
      <MembersBox userData={data} />
    </>
  );
};

export default MembersPage;
