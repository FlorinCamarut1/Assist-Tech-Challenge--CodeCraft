'use client';

import { SkillCategoryType } from '@/types';
import { IoMdClose } from 'react-icons/io';
import { getSession } from '@/actions/getSession';

import axios from 'axios';
import useSkillCategory from '@/hooks/skills/useSkillCategory';
import useSkillsModal from '@/hooks/skills/useSkillsModal';

interface SkillRoleBoxProps {
  data: SkillCategoryType;
}

const SkillCategoryBox = ({ data }: SkillRoleBoxProps) => {
  const session = getSession();

  const useAddSkillModal = useSkillsModal();
  const { mutate: mutateFetchedSkillCategory } = useSkillCategory(
    session?.organizationID
  );

  const handleDeleteSkillCategory = () => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_API}/SkillCategory/${data?.id}`)
      .then((data) => mutateFetchedSkillCategory());
  };

  return (
    <div
      className='flex w-full cursor-pointer items-center justify-between rounded-sm border-[1px] border-codeCraft-100 px-4 py-2 shadow-md hover:bg-slate-100'
      onClick={() => {
        useAddSkillModal.onOpen();
        useAddSkillModal.setData(data);
      }}
    >
      <p className='font-semibold text-codeCraft-900'>
        Category: <span className=' text-codeCraft-500'>{data.name}</span>
      </p>

      <IoMdClose
        onClick={(e) => {
          handleDeleteSkillCategory();
          e.stopPropagation();
        }}
      />
    </div>
  );
};

export default SkillCategoryBox;
