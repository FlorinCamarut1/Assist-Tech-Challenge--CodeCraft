'use client';

import MainNavigation from '@/components/navigation/MainNavigation';
import ProjectDetailsSection from '@/components/projects/ProjectDetailsSection';
import useProjectById from '@/hooks/projects/useProjectById';

const ProjectPageDescription = ({
  params,
}: {
  params: { projectId: string };
}) => {
  const projectId = params.projectId;
  const { data: projectData } = useProjectById(projectId);

  return (
    <>
      <MainNavigation />
      <div className='m-auto flex justify-center'>
        <ProjectDetailsSection projectData={projectData} />
      </div>
    </>
  );
};

export default ProjectPageDescription;
