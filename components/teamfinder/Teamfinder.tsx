'use client';

import { ProjectType, UserType } from '@/types';
import { useEffect, useMemo, useState } from 'react';

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
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = filteredData?.slice(firstItemIndex, lastItemIndex);

  const teamfinderFilterModal = useTeamFinderFilter();
  const filterState = useMemo(() => {
    let teamRolesArr = [] as any;

    projectData?.projectRoles.forEach((item: any) =>
      teamRolesArr.push(item?.teamRoleID)
    );
    const data = {
      partiallyAvailable: teamfinderFilterModal.partiallyAvailable,
      projectsCloseToFinish: teamfinderFilterModal.projectsCloseToFinish,
      unavailable: teamfinderFilterModal.unavailable,
      available: true,
      pastExperience: teamfinderFilterModal.pastExperience,
      weeks: teamfinderFilterModal.projectsCloseToFinish
        ? teamfinderFilterModal.weeks
        : 0,
      technologyStack: projectData?.technologyStack,
      teamRoleIDs: teamRolesArr,
      organizationID: projectData?.organizationID,
    };
    return data;
  }, [
    teamfinderFilterModal.partiallyAvailable,
    teamfinderFilterModal.projectsCloseToFinish,
    teamfinderFilterModal.unavailable,
    teamfinderFilterModal.pastExperience,
    projectData?.projectRoles,
    teamfinderFilterModal.weeks,
    projectData?.technologyStack,
    projectData?.organizationID,
  ]);

  useEffect(() => {
    if (!filterState?.technologyStack) return;
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/User/TeamFinder`, filterState)
      .then((response) => setFilteredData(response.data));
  }, [filterState]);

  return (
    <div className='mt-4 space-y-2 rounded-md border-[1px] px-2 py-5'>
      <h1 className=' bg-code text-center font-Raleway text-xl font-bold text-codeCraft-900'>
        Team Finder
      </h1>

      <TeamFinderFilter />
      <div className=' flex flex-col gap-2 scroll-auto'>
        {currentItems?.map((item: any) => (
          <MemberCard key={item?.user?.id} data={item} />
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
  );
};

export default Teamfinder;
