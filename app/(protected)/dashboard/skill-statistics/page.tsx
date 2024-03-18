'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getSession } from '@/actions/getSession';
import useUserById from '@/hooks/users/useUserById';
import { useEffect, useState } from 'react';
import useSkillsByOrganization from '@/hooks/skills/useSkillsByOrganization';

import axios from 'axios';
import useUsersByDepartmentId from '@/hooks/users/useUsersByDepartmentId';

ChartJS.register(ArcElement, Tooltip, Legend);

const SkillStatisticsPage = () => {
  const session = getSession();
  const { data: currentUserData } = useUserById(session?.id);
  const { data: organizationSkills } = useSkillsByOrganization(
    currentUserData?.organizationID
  );

  const { data: totalUsersFromDepartment } = useUsersByDepartmentId(
    currentUserData?.departmentID
  );

  const [skill, setSkill] = useState();
  const [skillsData, setSkillData] = useState<any>([]);

  useEffect(() => {
    if (!skill) return;
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/Skill/SkillStatistics`, {
        departmentID: currentUserData?.departmentID,
        skillID: skill,
      })
      .then((response) => setSkillData(response.data));
  }, [currentUserData?.departmentID, skill]);

  const data = {
    labels: ['Learns', 'Knows', 'Does', 'Helps', 'Teaches'],
    datasets: [
      {
        label: 'Experience',
        data: [
          skillsData?.countOfUsersLevel1,
          skillsData?.countOfUsersLevel2,
          skillsData?.countOfUsersLevel3,
          skillsData?.countOfUsersLevel4,
          skillsData?.countOfUsersLevel5,
        ],
        backgroundColor: [
          '#D9D9D9',
          '#CBCEF0',
          '#414959',
          ,
          '#1C3B72',
          '#061125',
        ],
        borderColor: ['#D9D9D9', '#CBCEF0', '#414959', , '#1C3B72', '#061125'],
      },
    ],
  };

  const options = {};
  return (
    <div>
      <div className='hidden flex-col md:flex'>
        <div className='flex-1 space-y-4 p-8 pt-6'>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Total users
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>
                  {skillsData?.totalCountOfUsers}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Total Skills in Organization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>
                  {organizationSkills?.length}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Total users in Department
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>
                  {totalUsersFromDepartment?.length}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
            <Card className='col-span-3'>
              <CardHeader>
                <CardTitle>Skill Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                {' '}
                <Doughnut data={data} options={options} />
              </CardContent>
            </Card>
            <Card className='col-span-4'>
              <CardHeader>
                <CardTitle>Skill Statistics</CardTitle>
                <CardDescription>Select a skill for statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <Select
                  onValueChange={(value) => setSkill(value as any)}
                  defaultValue={organizationSkills?.[0]?.id}
                >
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Please select a skill' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Skills</SelectLabel>

                      {organizationSkills?.map((item: any) => (
                        <SelectItem key={item?.id} value={item?.id}>
                          {item?.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <div className='mt-10  w-fit justify-between rounded-md border-[1px] shadow-md'>
                  <div className='flex justify-between gap-4 p-2'>
                    <div className='h-6 w-6 rounded-full bg-[#D9D9D9]' />
                    <p className=' font-semibold text-codeCraft-500'>
                      Skill level: <span className='font-normal'>Learning</span>{' '}
                    </p>
                    <p className=' font-semibold text-codeCraft-500'>
                      Count:
                      <span className='font-normal'>
                        {skillsData?.countOfUsersLevel1}
                      </span>{' '}
                    </p>
                  </div>
                  <div className='flex justify-between gap-4 p-2'>
                    <div className='h-6 w-6 rounded-full bg-[#CBCEF0]' />
                    <p className=' font-semibold text-codeCraft-500'>
                      Skill level: <span className='font-normal'>Knows</span>{' '}
                    </p>
                    <p className=' font-semibold text-codeCraft-500'>
                      Count:
                      <span className='font-normal'>
                        {skillsData?.countOfUsersLevel2}
                      </span>{' '}
                    </p>
                  </div>
                  <div className='flex justify-between gap-4 p-2'>
                    <div className='h-6 w-6 rounded-full bg-[#414959]' />
                    <p className=' font-semibold text-codeCraft-500'>
                      Skill level: <span className='font-normal'>Does</span>{' '}
                    </p>
                    <p className=' font-semibold text-codeCraft-500'>
                      Count:
                      <span className='font-normal'>
                        {skillsData?.countOfUsersLevel3}
                      </span>{' '}
                    </p>
                  </div>
                  <div className='flex justify-between gap-4 p-2'>
                    <div className='h-6 w-6 rounded-full bg-[#1C3B72]' />
                    <p className=' font-semibold text-codeCraft-500'>
                      Skill level: <span className='font-normal'>Helps</span>{' '}
                    </p>
                    <p className=' font-semibold text-codeCraft-500'>
                      Count:
                      <span className='font-normal'>
                        {skillsData?.countOfUsersLevel4}
                      </span>{' '}
                    </p>
                  </div>
                  <div className='flex justify-between gap-4 p-2'>
                    <div className='h-6 w-6 rounded-full bg-[#061125]' />
                    <p className=' font-semibold text-codeCraft-500'>
                      Skill level: <span className='font-normal'>Teaches</span>{' '}
                    </p>
                    <p className=' font-semibold text-codeCraft-500'>
                      Count:
                      <span className='font-normal'>
                        {skillsData?.countOfUsersLevel5}
                      </span>{' '}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillStatisticsPage;
