'use client';
import { getSession } from '@/actions/getSession';
import useTeamRoles from '@/hooks/useTeamRoles';
import React from 'react';
import TeamRoleBox from './TeamRoleBox';
import { TeamRoleType } from '@/types';

const TeamRolesBox = () => {
  const session = getSession();
  const { data } = useTeamRoles(session?.organizationID);

  return (
    <div className='mt-4 flex flex-col gap-4 rounded-md border-[1px] border-codeCraft-100 p-4'>
      <h3 className='font-Raleway text-lg font-semibold'>
        Current team roles:
      </h3>
      <div className=' grid grid-cols-6 gap-2'>
        {data?.map((role: TeamRoleType) => (
          <TeamRoleBox key={role.id} name={role.name} id={role.id} />
        ))}
      </div>
    </div>
  );
};

export default TeamRolesBox;
