'use client';

import { DepartmentType } from '@/types';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

import DepartmentBox from '@/components/departments/DepartmentBox';
import useDepartments from '@/hooks/useDepartments';
import PaginationSection from '@/components/ui/PaginationSection';

const DepartmentsPage = () => {
  const { data, mutate: mutateFetchedDepartments } = useDepartments();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = data?.slice(firstItemIndex, lastItemIndex);

  return (
    <div className='flex flex-col gap-5'>
      <div className='flex justify-between'>
        <h1 className='w-full text-2xl font-semibold'>Departments</h1>
        <Button>Add new department</Button>
      </div>
      <div className='grid grid-cols-3 '>
        {currentItems?.map((item: DepartmentType) => (
          <DepartmentBox key={item.id} item={item} />
        ))}
      </div>
      {data?.length > 9 && (
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

export default DepartmentsPage;
