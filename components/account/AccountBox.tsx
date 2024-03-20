'use client';

import { getSession } from '@/actions/getSession';
import { getSystemRolesById } from '@/lib/getSystemRolesById';

import useDepartmentsById from '@/hooks/departments/useDepartmentsById';
import useSystemRoles from '@/hooks/system-roles/useSystemRoles';
import useSkillByAuthorId from '@/hooks/skills/useSkillByAuthorId';

import SKillBox from './SKillBox';
import { useState } from 'react';
import PaginationSection from '../ui/PaginationSection';
import useUserById from '@/hooks/users/useUserById';

interface AccountBoxProps {
  currentUserData: any;
}

const AccountBox = ({ currentUserData }: AccountBoxProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = currentUserData?.skills?.slice(
    firstItemIndex,
    lastItemIndex
  );
  const { data: departmentData } = useDepartmentsById(
    currentUserData?.departmentID
  );
  const { data: SystemRolesData } = useSystemRoles();

  const systemRoles = getSystemRolesById(
    SystemRolesData,
    currentUserData?.systemRoleIDs
  );

  return (
    <div className='h-auto w-auto space-y-2 rounded-md border-[1px] border-codeCraft-100 p-4'>
      <p className='font-semibold'>
        Name:{' '}
        <span className='font-normal text-codeCraft-500'>
          {currentUserData?.name}
        </span>
      </p>
      <p className='font-semibold'>
        Email:{' '}
        <span className='font-normal text-codeCraft-500'>
          {currentUserData?.email}
        </span>
      </p>
      <p className='font-semibold'>
        Department:{' '}
        <span className='font-normal text-codeCraft-500'>
          {departmentData?.name}
        </span>
      </p>
      <h2 className=' text-lg font-semibold text-codeCraft-500'>Skills</h2>
      {currentItems?.map((skill: any) => (
        <SKillBox
          key={skill.skillID}
          data={skill}
          currentUser={currentUserData}
        />
      ))}
      {currentUserData?.skills?.length > 2 && (
        <PaginationSection
          totalItems={currentUserData?.skills?.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default AccountBox;
