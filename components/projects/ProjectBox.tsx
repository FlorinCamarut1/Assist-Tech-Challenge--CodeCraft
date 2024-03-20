'use client';
import useUserById from '@/hooks/users/useUserById';
import { ProjectType } from '@/types';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { LiaProjectDiagramSolid } from 'react-icons/lia';

interface ProjectBoxProps {
  item: ProjectType;
}

const ProjectBox = ({ item }: ProjectBoxProps) => {
  const { data: projectManagerData } = useUserById(item?.projectManagerID);

  const router = useRouter();
  const dateFormat = format(new Date(item?.deadlineDate), 'dd MMMM yyyy');
  return (
    <div
      className='flex cursor-pointer flex-col  items-center justify-center gap-2 rounded-md border-[1px] border-codeCraft-100 p-2 shadow-sm hover:bg-slate-100'
      onClick={() => router.push(`/project-details/${item?.id}`)}
    >
      <LiaProjectDiagramSolid size={30} />
      <h1 className=' font-semibold'>Project Name: {item.name}</h1>
      <p className=' text-xs text-codeCraft-500'>
        <span className='font-semibold'>Project Manager: </span>
        {projectManagerData?.name}
      </p>
      <p className=' text-xs text-codeCraft-500'>
        <span className='font-semibold'>Project Deadline: </span>
        {item?.deadlineDate !== null ? dateFormat : 'Ongoing'}
      </p>
    </div>
  );
};

export default ProjectBox;
