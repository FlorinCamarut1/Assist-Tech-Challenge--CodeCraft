'use client';
import { ProjectType } from '@/types';

import ProjectDetailsBox from './ProjectDetailsBox';

import ProjectTeamsBox from './ProjectTeamsBox';
import Teamfinder from '../teamfinder/Teamfinder';
import ProposalsBox from './ProposalsBox';

interface ProjectDetailsSectionProps {
  projectData: ProjectType;
}

const ProjectDetailsSection = ({ projectData }: ProjectDetailsSectionProps) => {
  return (
    <div className='flex gap-4'>
      <div className=' space-y-4'>
        <h1 className='px-2 py-6 font-Raleway text-4xl font-semibold'>
          Welcome to project {projectData?.name} dashboard
        </h1>
        <ProjectDetailsBox projectData={projectData} />
        <ProjectTeamsBox projectData={projectData} />
        <ProposalsBox projectData={projectData} />
      </div>
      <Teamfinder projectData={projectData} />
    </div>
  );
};

export default ProjectDetailsSection;
