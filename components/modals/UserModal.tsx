'use client';

import { SystemRoleType, UserType } from '@/types';
import { useState } from 'react';
import { Button } from '../ui/button';

import useUserModal from '@/hooks/useUserModal';
import Modal from '../ui/Modal';
import Select from 'react-select';
import useSystemRoles from '@/hooks/useSystemRoles';
import axios from 'axios';

const UserModal = () => {
  const userModal = useUserModal();
  const userData = userModal?.data as UserType;
  const { data, mutate: mutateUpdatedRoles } = useSystemRoles();

  const [selected, setSelected] = useState<any>([]);

  const handleRoleAssign = () => {
    axios
      .put(`${process.env.NEXT_PUBLIC_API}/User`, {
        ...userData,
        systemRoleIDs: [selected?.value],
      })
      .then((data) => console.log(data));
  };

  return (
    <Modal isOpen={userModal.isOpen} onClose={userModal.onClose}>
      <div className='flex h-[300px] w-full flex-col gap-3 py-8'>
        <h1 className=' font-Raleway font-semibold text-codeCraft-500'>
          Chose sytem roles for user:{' '}
          <span className=' font-bold text-codeCraft-900'>
            {userData?.name}
          </span>
        </h1>
        <Select
          className='text-black'
          options={data?.map((role: SystemRoleType) => ({
            value: role.id,
            label: role.name,
          }))}
          onChange={(value: any) => setSelected(value)}
        />
        <Button onClick={handleRoleAssign}>Assign role</Button>
      </div>
    </Modal>
  );
};

export default UserModal;
