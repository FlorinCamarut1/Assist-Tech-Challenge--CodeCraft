'use client';

import { getSession } from '@/actions/getSession';

import MembersBox from '@/components/members/MembersBox';
import useUserById from '@/hooks/users/useUserById';
import useUsersByDepartmentId from '@/hooks/users/useUsersByDepartmentId';
import React from 'react';

const DepartmentMembers = () => {
  const session = getSession();
  const { data: currentUser } = useUserById(session?.id);

  const { data: departmentMembers } = useUsersByDepartmentId(
    currentUser?.departmentID
  );

  return (
    <div>
      <MembersBox userData={departmentMembers} label='Department members' />
    </div>
  );
};

export default DepartmentMembers;
