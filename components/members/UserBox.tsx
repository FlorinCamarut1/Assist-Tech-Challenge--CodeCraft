'use client';

import { UserType } from '@/types';
import { getSystemRolesById } from '@/lib/getSystemRolesById';

import useSystemRoles from '@/hooks/system-roles/useSystemRoles';
import useUserModal from '@/hooks/users/useUserModal';

interface UserBoxProps {
  data: UserType;
  skillValidation?: boolean;
}
const UserBox = ({ data, skillValidation }: UserBoxProps) => {
  const { data: systemRoles } = useSystemRoles();
  const rolesName = getSystemRolesById(systemRoles, data?.systemRoleIDs);
  const userModal = useUserModal();

  return (
    <div>
      <div
        className='mb-2 grid w-full cursor-pointer justify-between gap-2 rounded-md border-[1px] p-3 shadow-md transition hover:bg-slate-100 '
        onClick={() => {
          userModal.onOpen();
          userModal.setData(data);
        }}
      >
        <p className='px-2 font-semibold text-codeCraft-500'>
          Name: {data.name}
        </p>
        <p className='px-2 text-sm font-semibold text-codeCraft-500'>
          SystemRoles:{' '}
          {rolesName?.map((roleName) => (
            <span
              className='mx-1 rounded-sm border-[1px] border-codeCraft-100 bg-slate-50 p-1 text-xs'
              key={roleName}
            >
              {roleName}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default UserBox;
