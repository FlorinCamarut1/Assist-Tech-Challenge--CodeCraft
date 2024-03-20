'use client';

import { UserType } from '@/types';
import { getSystemRolesById } from '@/lib/getSystemRolesById';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

import useSystemRoles from '@/hooks/system-roles/useSystemRoles';
import axios from 'axios';
import useUserById from '@/hooks/users/useUserById';
import useUsersByDepartmentId from '@/hooks/users/useUsersByDepartmentId';

interface UserBoxProps {
  data: UserType;
  skillValidation?: boolean;
}
const DepartmentMemberBox = ({ data }: UserBoxProps) => {
  const router = useRouter();
  const { data: systemRoles } = useSystemRoles();
  const { data: selectedUser } = useUserById(data?.id);
  const { mutate: mutateFetchedUsersByDepId } = useUsersByDepartmentId(
    selectedUser?.departmentID
  );

  const rolesName = getSystemRolesById(systemRoles, data?.systemRoleIDs);

  const handleDeleteUserFromDepartment = () => {
    axios
      .put(`${process.env.NEXT_PUBLIC_API}/User`, {
        ...selectedUser,
        departmentID: null,
      })
      .then((response) => mutateFetchedUsersByDepId());
  };

  return (
    <div>
      <div
        className='mb-2 flex w-full cursor-pointer  justify-between gap-2 rounded-md border-[1px] p-3 shadow-md transition hover:bg-slate-100 '
        onClick={() => {
          router.push(`/dashboard/department-members/${data?.id}`);
        }}
      >
        <p className='px-2 font-semibold text-codeCraft-500'>
          Name: {data.name}
        </p>
        <div className='flex items-center gap-2'>
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
          <Button
            variant='destructive'
            className='w-fit'
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteUserFromDepartment();
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DepartmentMemberBox;
