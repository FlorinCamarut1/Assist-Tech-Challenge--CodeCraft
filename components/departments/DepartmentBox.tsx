'use client';

import { FaRegBuilding } from 'react-icons/fa';
import { DepartmentType } from '@/types';
import { useMemo, useState } from 'react';

import useDepartmentModal from '@/hooks/departments/useDepartmentModal';
import axios from 'axios';

interface DepartmentBoxProps {
  item: DepartmentType;
}
const DepartmentBox = ({ item }: DepartmentBoxProps) => {
  const [manager, setManager] = useState('');
  const departmentModal = useDepartmentModal();
  useMemo(() => {
    if (!item.managerID) {
      setManager('Not asigned');
    } else {
      axios
        .get(`${process.env.NEXT_PUBLIC_API}/User/${item.managerID}`)
        .then((data) => setManager(data.data.name));
    }
  }, [item.managerID]);

  return (
    <>
      <div
        className='m-2 flex cursor-pointer  rounded-sm border-[1px] px-4 py-5 shadow-lg transition hover:bg-slate-100'
        onClick={(e) => {
          departmentModal.onOpen();
          departmentModal.setData(item);
        }}
      >
        <FaRegBuilding size={60} color='#414959' />
        <div className='flex w-full flex-col items-center justify-center gap-2 px-2'>
          <h3 className=' font-Raleway text-2xl font-semibold text-codeCraft-900'>
            {item.name}
          </h3>
          <p className='text-xs text-codeCraft-400'>Manager: {manager}</p>
        </div>
      </div>
    </>
  );
};

export default DepartmentBox;
