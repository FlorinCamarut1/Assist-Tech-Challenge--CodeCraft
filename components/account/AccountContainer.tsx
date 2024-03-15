'use client';

import { getSession } from '@/actions/getSession';
import AccountBox from './AccountBox';
import { Button } from '../ui/button';
import useAccountModal from '@/hooks/account/useAccountModal';
import useUserById from '@/hooks/users/useUserById';

const AccountContainer = () => {
  const session = getSession();
  const accountModal = useAccountModal();
  const { data: currentUserData } = useUserById(session?.id);

  return (
    <div className='h-full w-full space-y-4'>
      <div className='flex justify-between'>
        <h1 className='text-2xl font-semibold text-codeCraft-900'>
          Account page
        </h1>
        <Button onClick={() => accountModal.onOpen()}>Add a Skill</Button>
      </div>
      <AccountBox currentUserData={currentUserData} />
    </div>
  );
};

export default AccountContainer;
