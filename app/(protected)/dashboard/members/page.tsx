'use client';

import { getSession } from '@/actions/getSession';

import MembersBox from '@/components/members/MembersBox';

import UserModal from '@/components/modals/UserModal';
import useUserById from '@/hooks/users/useUserById';
import useUsers from '@/hooks/users/useUsers';
import React from 'react';

const MembersPage = () => {
  const session = getSession();
  const { data: currentUser } = useUserById(session?.id);
  const { data } = useUsers(currentUser?.organizationID);

  return (
    <>
      <UserModal />
      <MembersBox userData={data} label='Organization members' />
    </>
  );
};

export default MembersPage;
