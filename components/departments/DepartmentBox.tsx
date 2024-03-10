'use client';

import { FaRegBuilding } from 'react-icons/fa';
import { DepartmentType } from '@/types';

interface DepartmentBoxProps {
  item: DepartmentType;
}
const DepartmentBox = ({ item }: DepartmentBoxProps) => {
  return (
    <div className='m-1 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-sm border-[1px] px-2 py-5 shadow-lg transition hover:bg-slate-100'>
      <h3 className=' font-Raleway font-semibold'>{item.name}</h3>
      <FaRegBuilding size={40} color='#414959' />
      <p className='text-codeCraft-400 text-xs'>
        Manager: {!item.id ? 'Not assigned' : item.id}
      </p>
    </div>
  );
};

export default DepartmentBox;
