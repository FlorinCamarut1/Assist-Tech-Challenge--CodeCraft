'use client';

import { SkillCategoryType } from '@/types';

import useSkillCategory from '@/hooks/skills/useSkillCategory';
import React, { useState } from 'react';
import SkillCategoryBox from './SkillCategoryBox';
import PaginationSection from '../ui/PaginationSection';
import { getSession } from '@/actions/getSession';

const SkillsCategoryBox = () => {
  const session = getSession();

  const { data } = useSkillCategory(session?.organizationID);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(7);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = data?.slice(firstItemIndex, lastItemIndex);

  return (
    <div className='flex w-full flex-col gap-2'>
      {currentItems?.map((item: SkillCategoryType) => (
        <SkillCategoryBox data={item} key={item.id} />
      ))}
      {data?.length > 6 && (
        <PaginationSection
          totalItems={data?.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default SkillsCategoryBox;
