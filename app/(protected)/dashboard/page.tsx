'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent } from '@/components/ui/tabs';

import { Overview } from '@/components/skillStatistics/overview';
import { getSession } from '@/actions/getSession';
import useUsers from '@/hooks/users/useUsers';
import useDepartments from '@/hooks/departments/useDepartments';
import useProjects from '@/hooks/projects/useProjects';
import useSkillsByOrganization from '@/hooks/skills/useSkillsByOrganization';

export default function DashboardPage() {
  const session = getSession();
  const { data: usersData } = useUsers(session?.organizationID);
  const { data: departmentsData } = useDepartments(session?.organizationID);
  const { data: projectsData } = useProjects(session?.organizationID);
  const { data: skillsData } = useSkillsByOrganization(session?.organizationID);

  const data = [
    {
      name: 'Dec',
      value: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: 'asC',
      value: Math.floor(Math.random() * 5000) + 1000,
    },
  ];

  return (
    <>
      <div className='hidden flex-col md:flex'>
        <div className='flex-1 space-y-4 p-8 pt-6'>
          <Tabs defaultValue='overview' className='space-y-4'>
            <TabsContent value='overview' className='space-y-4'>
              <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
                <Card>
                  <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>
                      Total users
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='text-2xl font-bold'>
                      {usersData?.length}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>
                      Total Departments
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='text-2xl font-bold'>
                      {departmentsData?.length}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>
                      Total Projects
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='text-2xl font-bold'>
                      {projectsData?.length}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>
                      Total skills
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='text-2xl font-bold'>
                      {skillsData?.length}
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
                <Card className='col-span-4'>
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className='pl-2'>
                    <Overview />
                  </CardContent>
                </Card>
                <Card className='col-span-3'>
                  <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
