import useTeamRoles from '@/hooks/useTeamRoles';
import useUserById from '@/hooks/users/useUserById';

interface TeamMemberMenuItemProps {
  member: any;
}

const TeamMemberMenuItem = ({ member }: TeamMemberMenuItemProps) => {
  const { data: userData } = useUserById(member?.userID);
  const { data: teamRolesData } = useTeamRoles(userData?.organizationID);
  let rolesArr = [] as any;

  member?.teamRoleIDs?.forEach((role: any) =>
    teamRolesData?.map((existingRole: any) =>
      existingRole?.id === role ? rolesArr.push(existingRole?.name) : null
    )
  );

  return (
    <div className='flex w-full flex-col rounded-sm border-[1px] border-codeCraft-100 px-2'>
      <p>
        <span className='font-semibold'>Name: </span>
        {userData?.name}
      </p>
      <p>
        <span className='font-semibold'>Work Hours: </span>
        {member?.workHours}
      </p>
      <p>
        <span className='font-semibold'>Team Role: </span>
        {rolesArr.map((role: any, index: any) => (
          <span key={role}>
            {role}
            {index === member?.teamRoleIDs?.length - 1 ? '' : ' | '}
          </span>
        ))}
      </p>
      <p>
        <span className='font-semibold'>Status: </span>
        {member?.active ? 'Active' : 'Inactive'}
      </p>
    </div>
  );
};

export default TeamMemberMenuItem;

//
