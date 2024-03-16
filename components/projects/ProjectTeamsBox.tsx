import { ProjectType } from '@/types';
import { Button } from '../ui/button';

interface ProjectTeamsBoxProps {
  projectData: ProjectType;
}

const ProjectTeamsBox = ({ projectData }: ProjectTeamsBoxProps) => {
  return (
    <div className='rounded-md px-4 py-6 shadow-md'>
      <h1 className=' font-Raleway text-3xl font-semibold text-codeCraft-500 '>
        Team
      </h1>
    </div>
  );
};

export default ProjectTeamsBox;
