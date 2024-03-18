'use client';

import { ProjectType, UserType } from '@/types';
import { useEffect, useMemo, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

import useTeamFinderFilter from '@/hooks/team-finder/useTeamFinderFilter';
import TeamFinderFilter from './TeamFinderFilter';
import axios from 'axios';
import MemberCard from './MemberCard';
import PaginationSection from '../ui/PaginationSection';

interface TeamfinderProps {
  projectData: ProjectType;
}

const Teamfinder = ({ projectData }: TeamfinderProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [filteredData, setFilteredData] = useState([]);
  const [additionalContext, setAdditionalContext] = useState('');

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = filteredData?.slice(firstItemIndex, lastItemIndex);

  const teamfinderFilter = useTeamFinderFilter();

  const filterState = useMemo(() => {
    let teamRolesArr = [] as any;

    projectData?.projectRoles.forEach((item: any) =>
      teamRolesArr.push(item?.teamRoleID)
    );
    const data = {
      partiallyAvailable: teamfinderFilter.partiallyAvailable,
      projectsCloseToFinish: teamfinderFilter.projectsCloseToFinish,
      unavailable: teamfinderFilter.unavailable,
      available: true,
      pastExperience: teamfinderFilter.pastExperience,
      weeks: teamfinderFilter.projectsCloseToFinish
        ? teamfinderFilter.weeks
        : 0,
      technologyStack: projectData?.technologyStack,
      teamRoleIDs: teamRolesArr,
      organizationID: projectData?.organizationID,
    };
    return data;
  }, [
    teamfinderFilter.partiallyAvailable,
    teamfinderFilter.projectsCloseToFinish,
    teamfinderFilter.unavailable,
    teamfinderFilter.pastExperience,
    projectData?.projectRoles,
    teamfinderFilter.weeks,
    projectData?.technologyStack,
    projectData?.organizationID,
  ]);

  useEffect(() => {
    if (!filterState?.technologyStack) {
      return;
    } else if (teamfinderFilter.isOpenAI) {
      return;
    }
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/User/TeamFinder`, {
        ...filterState,
        skillRequirements: projectData?.skillRequirements,
      })
      .then((response) => setFilteredData(response.data));
  }, [filterState, teamfinderFilter.isOpenAI, projectData]);

  const handleFilterWithAI = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/User/TeamFinderOpenAI`, {
        project: {
          ...projectData,
        },
        additionalContext: additionalContext,
      })
      .then((response) => setFilteredData(response.data));
  };

  return (
    <>
      <div className='mt-4 space-y-2 rounded-md border-[1px] px-2 py-5'>
        <h1 className=' bg-code text-center font-Raleway text-xl font-bold text-codeCraft-900'>
          Team Finder
        </h1>

        <TeamFinderFilter />

        {teamfinderFilter.isOpenAI && (
          <div className='flex justify-end gap-2'>
            <Input
              type='text'
              placeholder='Additional content'
              value={additionalContext}
              onChange={(e) => setAdditionalContext(e.target.value)}
            />
            <Button onClick={handleFilterWithAI}>Filter with AI</Button>
          </div>
        )}
        <div className=' flex flex-col gap-2 scroll-auto'>
          {currentItems?.map((item: any) => (
            <MemberCard
              key={item?.user?.id}
              data={item}
              projectData={projectData}
            />
          ))}
        </div>
        {filteredData?.length > 10 && (
          <PaginationSection
            totalItems={filteredData?.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </>
  );
};

export default Teamfinder;
