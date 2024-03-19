'use client';
import { useState } from 'react';
import { ProjectType } from '@/types';
import { FaArrowUp } from 'react-icons/fa';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

import MultiSelect from '../ui/MultiSelect';
import useTeamRoles from '@/hooks/useTeamRoles';
import clsx from 'clsx';
import axios from 'axios';
import useAllocationProposalsByProjectId from '@/hooks/proposals/useAllocationProposalsByProjectId';

interface MemberCardProps {
  data?: any;
  projectData: ProjectType;
}

const MemberCard = ({ data, projectData }: MemberCardProps) => {
  const { data: teamRoles } = useTeamRoles(projectData?.organizationID);

  const { mutate: mutateProposal } = useAllocationProposalsByProjectId(
    projectData?.id
  );

  const [isOpen, setIsOpen] = useState(false);
  const [projectRoles, setProjectRoles] = useState<any>([]);

  const [workHours, setWorkHours] = useState(data?.workHours);

  // const convertRoleIdToName = (id: any) => {
  //   const nameMatch = teamRoles.find((role: any) => role?.id === id);
  //   return nameMatch.name;
  // };
  let filteredProjectRolesArray = [] as any;

  projectRoles?.forEach((item: any) =>
    filteredProjectRolesArray?.push(item?.value)
  );

  const maxAllocationHours = 8 - data?.workHours;

  const handleWorkHoursInput = (e: any) => {
    const value = e.target.value;
    // Ensure the value is a valid number
    if (!isNaN(value)) {
      // Limit the value to maxNumber
      setWorkHours(Math.min(Number(value), maxAllocationHours));
    }
  };

  const handleSendProposal = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/AssignmentProposal`, {
        userID: data?.user.id,
        projectID: projectData?.id,
        workHours: workHours,
        teamRoleIDs: filteredProjectRolesArray,
        accepted: false,
      })
      .then((response) => {
        setIsOpen(false);
        mutateProposal();
      });
  };

  return (
    <>
      <div
        className={clsx(
          `mt-2 flex w-full cursor-pointer justify-between rounded-md border-[1px] border-codeCraft-100 p-2 shadow-sm hover:bg-slate-100`,
          isOpen && 'bg-slate-200'
        )}
        onClick={() => setIsOpen((open) => !open)}
      >
        <p className=' font-semibold'>
          Name: <span className='font-normal'>{data?.user?.name}</span>
        </p>
        <p className=' flex items-center gap-2 font-semibold'>
          WorkHours: <span className=' font-normal'>{data?.workHours}</span>
          {isOpen && <FaArrowUp size={20} />}
        </p>
      </div>
      {isOpen && (
        <div className='col  flex flex-col gap-1 rounded-sm bg-slate-200 p-2'>
          <MultiSelect
            label='Team Roles'
            // disabled={isPending}
            options={teamRoles?.map((role: any) => ({
              value: role?.id,
              label: role?.name,
            }))}
            onChange={(value: any) => setProjectRoles(value)}
          />
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm'>Work Hours</p>
              <Input
                type='number'
                value={workHours}
                onChange={handleWorkHoursInput}
              />
            </div>
            <Button onClick={handleSendProposal}>Assign</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default MemberCard;
