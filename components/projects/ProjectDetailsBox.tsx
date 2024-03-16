import useUserById from '@/hooks/users/useUserById';
import { ProjectType } from '@/types';
import { format } from 'date-fns';

interface ProjectDetailsBoxProps {
  projectData: ProjectType;
}
const ProjectDetailsBox = ({ projectData }: ProjectDetailsBoxProps) => {
  const { data: managerData } = useUserById(projectData?.projectManagerID);
  console.log(projectData);

  const formatDate = (date: string) => {
    if (!date) return;
    const newDate = format(new Date(date), 'dd MMMM yyyy');
    return newDate;
  };

  return (
    <div>
      <div className='w-fit space-y-4 rounded-md border-[1px] p-4'>
        <h3 className='text-xl font-semibold text-codeCraft-900'>
          Project details
        </h3>
        <ul>
          <li className='font-semibold text-codeCraft-500'>
            Project Manager:{' '}
            <span className='font-normal'>{managerData?.name}</span>
          </li>
          <li className='font-semibold text-codeCraft-500'>
            Skill requirements:{' '}
            {projectData?.technologyStack?.map((tech, index) => (
              <span key={tech} className='font-normal'>
                {tech}
                {index === projectData?.technologyStack?.length - 1
                  ? ''
                  : ' | '}
              </span>
            ))}
          </li>
          <li className='font-semibold text-codeCraft-500'>
            Created on:{' '}
            <span className='font-normal'>
              {formatDate(projectData?.startDate)}
            </span>
          </li>
          <li className='font-semibold text-codeCraft-500'>
            Deadline:{' '}
            <span className='font-normal'>
              {projectData?.deadlineDate !== ''
                ? formatDate(projectData?.deadlineDate)
                : 'on going'}
            </span>
          </li>
          <li className='font-semibold text-codeCraft-500'>
            Status: <span className='font-normal'>{projectData?.status}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetailsBox;
