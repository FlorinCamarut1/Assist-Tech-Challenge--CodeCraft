'use client';

import { UserType } from '@/types';

import React, { useState } from 'react';
import UserBox from './UserBox';
import PaginationSection from '../ui/PaginationSection';

interface MembersBoxProps {
  userData: UserType[];
}
const MembersBox = ({ userData }: MembersBoxProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = userData?.slice(firstItemIndex, lastItemIndex);

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='font-Raleway text-2xl font-semibold'>
        Organization Members
      </h1>

      <div className='w-full'>
        {currentItems?.map((user: UserType) => (
          <UserBox key={user.id} data={user} />
        ))}
      </div>
      {userData?.length > 5 && (
        <PaginationSection
          totalItems={userData?.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default MembersBox;
