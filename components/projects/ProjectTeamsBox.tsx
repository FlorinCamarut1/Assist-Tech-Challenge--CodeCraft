import useTeamsByProjectId from '@/hooks/team/useTeamsByProjectId';
import { ProjectType } from '@/types';
import TeamMemberMenuItem from './TeamMemberMenuItem';

interface ProjectTeamsBoxProps {
  projectData: ProjectType;
}

const ProjectTeamsBox = ({ projectData }: ProjectTeamsBoxProps) => {
  const { data: projectTeamData } = useTeamsByProjectId(projectData?.id);

  return (
    <div className='rounded-md px-4 py-6 shadow-md'>
      <h1 className=' font-Raleway text-3xl font-semibold text-codeCraft-500 '>
        Team
      </h1>
      <div className='grid grid-cols-3 gap-2'>
        {projectTeamData?.[0]?.teamMembers?.map((member: any) => (
          <TeamMemberMenuItem key={member?.userID} member={member} />
        ))}
      </div>
    </div>
  );
};

export default ProjectTeamsBox;
