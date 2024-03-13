import useSkillsByCategoryId from '@/hooks/skills/useSkillsByCategoryId';
import { SkillCategoryType, SkillType } from '@/types';
import { IoMdClose } from 'react-icons/io';
import { Button } from '../ui/button';
import { MdEdit } from 'react-icons/md';
import { FaArrowUp } from 'react-icons/fa';
import { useState } from 'react';
import { Input } from '../ui/input';

import axios from 'axios';

interface SkillByRoleBoxProps {
  data: SkillType;
  category: SkillCategoryType;
}

const SkillByRoleBox = ({ data, category }: SkillByRoleBoxProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(data?.name);
  const [description, setDescription] = useState(data?.description);

  const { mutate: mutateFetchedSkillByCategory } = useSkillsByCategoryId(
    category.id
  );

  const editSkillHandler = () => {
    axios
      .put(`${process.env.NEXT_PUBLIC_API}/Skill`, {
        ...data,
        name,
        description,
      })
      .then((data) => {
        mutateFetchedSkillByCategory();
        setIsEditing(false);
      });
  };

  const handleDeleteSkill = () => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_API}/Skill/${data.id}`)
      .then((data) => mutateFetchedSkillByCategory());
  };
  return (
    <>
      <div className=' grid w-full grid-cols-8 items-center  rounded-md border-[1px] border-codeCraft-100 px-4 py-2 text-xs'>
        <p className=' col-span-3 font-semibold text-codeCraft-900'>
          {' '}
          Skill Name: <span className=' text-codeCraft-500'>{data?.name}</span>
        </p>
        <p className=' col-span-3 font-semibold text-codeCraft-900'>
          {' '}
          Skill description:{' '}
          <span className=' text-codeCraft-500'>{data?.description}</span>
        </p>
        <div
          className='flex cursor-pointer justify-end'
          onClick={() => setIsEditing((edit) => !edit)}
        >
          {!isEditing && <MdEdit size={20} />}
          {isEditing && <FaArrowUp size={20} />}
        </div>
        <div className='flex justify-end'>
          <IoMdClose className='cursor-pointer' onClick={handleDeleteSkill} />
        </div>
      </div>
      {isEditing && (
        <div className='  flex w-full items-end justify-between gap-2'>
          <div>
            <p className='text-sm font-semibold'>Skill name:</p>
            <Input
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p className='text-sm font-semibold'>Skill description:</p>
            <Input
              defaultValue={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <Button onClick={editSkillHandler}>Edit</Button>
        </div>
      )}
    </>
  );
};

export default SkillByRoleBox;
