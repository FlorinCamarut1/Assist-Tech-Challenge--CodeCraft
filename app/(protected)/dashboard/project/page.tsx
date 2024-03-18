'use client';
import { getSession } from '@/actions/getSession';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

import ProjectBox from '@/components/projects/ProjectBox';
import PaginationSection from '@/components/ui/PaginationSection';

import useProjects from '@/hooks/projects/useProjects';
import AddProjectModal from '@/components/modals/AddProjectModal';
import useCreateProjectModal from '@/hooks/projects/useCreateDepartmentModal';
import TeamFinderFilterModal from '@/components/teamfinder/TeamFinderFilter';
import useUserById from '@/hooks/users/useUserById';
import { currentSystemRoles } from '@/lib/currentSystemRoles';

const ProjectsPage = () => {
  const session = getSession();
  const { data: currentUser } = useUserById(session?.id);

  const roles = currentSystemRoles(currentUser?.systemRoleIDs);

  const { data } = useProjects(session?.organizationID);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const createProjectModal = useCreateProjectModal();
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = data?.slice(firstItemIndex, lastItemIndex);

  return (
    <>
      <AddProjectModal />
      {/* <DepartmentModal /> */}
      <div className='flex flex-col gap-5'>
        <div className='flex justify-between'>
          <h1 className='w-full text-2xl font-semibold'>Projects</h1>
          {roles?.projMan && (
            <Button
              onClick={() => {
                createProjectModal.onOpen();
              }}
            >
              Add new project
            </Button>
          )}
        </div>
        <div className='grid grid-cols-4 gap-4 '>
          {currentItems?.map((item: any) => (
            <ProjectBox key={item.id} item={item} />
          ))}
        </div>
        {data?.length > 8 && (
          <PaginationSection
            totalItems={data?.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </>
  );
};

export default ProjectsPage;
