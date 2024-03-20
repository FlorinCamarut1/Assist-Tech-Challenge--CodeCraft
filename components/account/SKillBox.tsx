'use client';

import { Button } from '../ui/button';

import useSkillById from '@/hooks/skills/useSkillById';
import clsx from 'clsx';
import axios from 'axios';
import useUserById from '@/hooks/users/useUserById';
import { getSession } from '@/actions/getSession';
import { currentSystemRoles } from '@/lib/currentSystemRoles';

interface SKillBox {
  data: any;
  currentUser: any;
}
const SKillBox = ({ data, currentUser }: SKillBox) => {
  const session = getSession();
  const { data: currentUserData } = useUserById(session?.id);

  const role = currentSystemRoles(currentUserData?.systemRoleIDs);

  const { mutate: mutateFetchedUserData } = useUserById(currentUser?.id);
  const { data: skillData, mutate: mutateFetchedSkill } = useSkillById(
    data?.skillID
  );

  const acceptSkill = () => {
    const excludeUpdatingSkill = currentUser?.skills.filter(
      (item: any) => item.skillID !== data?.skillID
    );
    axios
      .put(`${process.env.NEXT_PUBLIC_API}/User`, {
        ...currentUser,
        skills: [...excludeUpdatingSkill, { ...data, status: 'Accepted' }],
      })
      .then((response) => {
        mutateFetchedSkill();
        mutateFetchedUserData();
      });
  };

  const deleteSkill = () => {
    const excludeDeletingSkill = currentUser?.skills.filter(
      (item: any) => item.skillID !== data?.skillID
    );
    axios
      .put(`${process.env.NEXT_PUBLIC_API}/User`, {
        ...currentUser,
        skills: excludeDeletingSkill,
      })
      .then((response) => {
        mutateFetchedSkill();
        mutateFetchedUserData();
      });
  };

  if (data?.status === 'Pending' && !role?.depMan) return;

  return (
    <div className='flex w-full justify-between rounded-sm border-[1px] border-codeCraft-100 p-2 shadow-md'>
      <div>
        <p className='font-semibold'>
          Skill Name:{' '}
          <span className='font-normal text-codeCraft-500'>
            {skillData?.name}
          </span>
        </p>
        <p className='font-semibold'>
          Skill level:{' '}
          <span className='font-normal text-codeCraft-500'>{data?.level}</span>
        </p>
        <p className='font-semibold'>
          Experience:{' '}
          <span className='font-normal text-codeCraft-500'>
            {data?.experience}
          </span>
        </p>
        <p className='font-semibold'>
          Training/Course/Certification:{' '}
          <span className='font-normal text-codeCraft-500'>
            {data?.trainingTitle}
          </span>
        </p>
        <p className='font-semibold'>
          Training/Course/Certification Description:{' '}
          <span className='font-normal text-codeCraft-500'>
            {data?.trainingDescription}
          </span>
        </p>
      </div>

      {role?.depMan && data?.status === 'Pending' && (
        <div className='flex flex-col items-end justify-between'>
          {' '}
          <p className='font-semibold'>
            Status:{' '}
            <span
              className={clsx(
                `rounded-sm p-2 font-semibold  text-codeCraft-900`,
                data?.status === 'Pending' ? ' bg-red-400' : ' bg-green-400'
              )}
            >
              {data?.status}
            </span>
          </p>
          <div className='flex gap-2'>
            <Button onClick={acceptSkill}>Accept</Button>
            <Button variant='destructive' onClick={deleteSkill}>
              Decline
            </Button>
          </div>
        </div>
      )}
      <Button variant='destructive' onClick={deleteSkill}>
        Delete SKill
      </Button>
    </div>
  );
};

export default SKillBox;
