'use client';

import { UserType } from '@/types';

import React from 'react';
import UserBox from './UserBox';

interface MembersBoxProps {
  userData: UserType[];
}
const MembersBox = ({ userData }: MembersBoxProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='font-Raleway text-2xl font-semibold'>
        Organization Members
      </h1>

      <div className='w-full'>
        {userData?.map((user: UserType) => (
          <UserBox key={user.id} data={user} />
        ))}
      </div>
    </div>
  );
};

export default MembersBox;
