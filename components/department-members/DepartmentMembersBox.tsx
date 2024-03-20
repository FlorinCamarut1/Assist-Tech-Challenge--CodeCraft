'use client';

import { UserType } from '@/types';

import React, { useState } from 'react';

import PaginationSection from '../ui/PaginationSection';
import DepartmentMemberBox from './DepartmentMemberBox';

interface MembersBoxProps {
  userData: UserType[];
  label: string;
}
const DepartmentMembersBox = ({ userData, label }: MembersBoxProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = userData?.slice(firstItemIndex, lastItemIndex);

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='font-Raleway text-2xl font-semibold'>{label}</h1>

      <div className='w-full'>
        {currentItems?.map((user: UserType) => (
          <DepartmentMemberBox key={user.id} data={user} />
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

export default DepartmentMembersBox;
