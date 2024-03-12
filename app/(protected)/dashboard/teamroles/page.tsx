import TeamRoleCreateForm from '@/components/teamroles/TeamRoleCreateForm';
import TeamRolesBox from '@/components/teamroles/TeamRolesBox';
import React from 'react';

const TeamRolesPage = () => {
  return (
    <div className='flex flex-col gap-10'>
      <TeamRoleCreateForm />
      <TeamRolesBox />
    </div>
  );
};

export default TeamRolesPage;
