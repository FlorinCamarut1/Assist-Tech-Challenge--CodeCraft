import useTeamsByProjectId from '@/hooks/team/useTeamsByProjectId';
import { ProjectType } from '@/types';
import TeamMemberMenuItem from './TeamMemberMenuItem';
import { isInt8Array } from 'util/types';

interface ProjectTeamsBoxProps {
  projectData: ProjectType;
}

const ProjectTeamsBox = ({ projectData }: ProjectTeamsBoxProps) => {
  const { data: projectTeamData } = useTeamsByProjectId(projectData?.id);

  let isActive = [] as any;
  let isInnactive = [] as any;

  projectTeamData?.[0]?.teamMembers?.map((user: any) =>
    user?.active ? isActive.push(user) : isInnactive.push(user)
  );

  return (
    <>
      {' '}
      <div className='rounded-md px-4 py-6 shadow-md'>
        <h1 className=' font-Raleway text-3xl font-semibold text-codeCraft-500 '>
          Active Team Members
        </h1>
        <div className='grid grid-cols-3 gap-2'>
          {isActive?.map((member: any) => (
            <TeamMemberMenuItem key={member?.userID} member={member} />
          ))}
        </div>
      </div>
      <div className='rounded-md px-4 py-6 shadow-md'>
        <h1 className=' font-Raleway text-3xl font-semibold text-codeCraft-500 '>
          Past Team Members
        </h1>
        <div className='grid grid-cols-3 gap-2'>
          {isInnactive?.map((member: any) => (
            <TeamMemberMenuItem key={member?.userID} member={member} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectTeamsBox;
{
  /* <Tabs defaultValue="Active" className="space-y-4">

<TabsList>
  <TabsTrigger value="Active">Active</TabsTrigger>
  <TabsTrigger value="Inactive" disabled>
    Inactive
  </TabsTrigger>
  
<TabsContent value="overview" className="space-y-4">
  
</TabsContent>
      </Tabs> */
}
