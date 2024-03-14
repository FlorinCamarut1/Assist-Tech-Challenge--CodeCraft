'use client';

import { SystemRoleType, UserType } from '@/types';
import { useState } from 'react';
import { Button } from '../ui/button';
import { getSession } from '@/actions/getSession';

import useUserModal from '@/hooks/users/useUserModal';
import Modal from '../ui/Modal';
import Select from 'react-select';
import useSystemRoles from '@/hooks/system-roles/useSystemRoles';
import axios from 'axios';
import useUsers from '@/hooks/users/useUsers';
import FormError from '../ui/FormError';

const UserModal = () => {
  const session = getSession();
  const [error, setError] = useState('');

  const userModal = useUserModal();
  const userData = userModal?.data as UserType;
  const { data, mutate: mutateUpdatedRoles } = useSystemRoles();
  const { mutate: mutateFetchedUsers } = useUsers(session?.organizationID);

  const [selected, setSelected] = useState<any>([]);

  const handleRoleAssign = () => {
    // filter for already existing roles
    if (userData.systemRoleIDs?.includes(selected?.value as never)) {
      setError('Role already assigned!');
      return;
    } else {
      axios
        .put(`${process.env.NEXT_PUBLIC_API}/User`, {
          ...userData,
          systemRoleIDs: [...(userData?.systemRoleIDs as []), selected?.value],
        })
        .then((data) => {
          mutateUpdatedRoles();
          mutateFetchedUsers();
          userModal.onClose();
          setError('');
        });
    }
  };

  return (
    <Modal isOpen={userModal.isOpen} onClose={userModal.onClose}>
      <FormError message={error} />
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
