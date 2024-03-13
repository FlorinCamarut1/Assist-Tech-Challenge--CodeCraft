import { SkillCategoryType } from '@/types';
import { useState } from 'react';

import useSkillsByCategoryId from '@/hooks/skills/useSkillsByCategoryId';
import SkillByRoleBox from './SkillByRoleBox';
import PaginationSection from '../ui/PaginationSection';

interface SkillsByRoleBox {
  data: SkillCategoryType;
}

const SkillsByRoleBox = ({ data }: SkillsByRoleBox) => {
  const { data: allSkillsData } = useSkillsByCategoryId(data?.id);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = allSkillsData?.slice(firstItemIndex, lastItemIndex);

  return (
    <div className='mt-4 flex flex-col gap-2 rounded-md p-4 shadow-md'>
      {currentItems?.map((skill: SkillCategoryType) => (
        <SkillByRoleBox key={skill.id} data={skill as any} category={data} />
      ))}
      {allSkillsData?.length > 4 && (
        <PaginationSection
          totalItems={allSkillsData?.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default SkillsByRoleBox;
