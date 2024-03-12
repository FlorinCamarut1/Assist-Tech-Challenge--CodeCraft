'use client';

import { UserType } from '@/types';

import useSystemRoles from '@/hooks/useSystemRoles';
import useUserModal from '@/hooks/useUserModal';

interface UserBoxProps {
  data: UserType;
}
const UserBox = ({ data }: UserBoxProps) => {
  const roles = useSystemRoles();
  const userModal = useUserModal();

  return (
    <div
      className='mb-2 flex w-full cursor-pointer justify-between rounded-md border-[1px] p-3 shadow-md transition hover:bg-slate-100  '
      onClick={() => {
        userModal.onOpen();
        userModal.setData(data);
      }}
    >
      <p className=' text-slate-300'>ID:{data.id}</p>
      <p className='px-2 font-semibold text-codeCraft-500'>Name: {data.name}</p>
      <p className='px-2 font-semibold text-codeCraft-500'>
        SystemRoles: {data.systemRoleIDs}
      </p>
    </div>
  );
};

export default UserBox;
