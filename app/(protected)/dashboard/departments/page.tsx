'use client';

import { DepartmentType } from '@/types';
import { Button } from '@/components/ui/button';
import { getSession } from '@/actions/getSession';
import React, { useState } from 'react';

import DepartmentBox from '@/components/departments/DepartmentBox';
import useDepartments from '@/hooks/departments/useDepartments';
import PaginationSection from '@/components/ui/PaginationSection';
import useCreateDepartmentModal from '@/hooks/departments/useCreateDepartmentModal';
import AddDepartmentModal from '@/components/modals/AddDepartmentModal';
import DepartmentModal from '@/components/modals/DepartmentModal';

const DepartmentsPage = () => {
  const session = getSession();

  const { data } = useDepartments(session?.organizationID);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const createDepartmentModal = useCreateDepartmentModal();
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = data?.slice(firstItemIndex, lastItemIndex);

  return (
    <>
      <AddDepartmentModal />
      <DepartmentModal />
      <div className='flex flex-col gap-5'>
        <div className='flex justify-between'>
          <h1 className='w-full text-2xl font-semibold'>Departments</h1>
          <Button
            onClick={() => {
              createDepartmentModal.onOpen();
            }}
          >
            Add new department
          </Button>
        </div>
        <div className='grid grid-cols-3 '>
          {currentItems?.map((item: DepartmentType) => (
            <DepartmentBox key={item.id} item={item} />
          ))}
        </div>
        {data?.length > 8 && (
          <PaginationSection
            totalItems={data?.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </>
  );
};

export default DepartmentsPage;
