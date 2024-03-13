'use client';

import SkillsForm from '@/components/skills/SkillsForm';
import React from 'react';
import AddSkillsModal from '@/components/modals/AddSkillsModal';
import SkillsCategoryBox from '@/components/skills/SkillsCategoryBox';

const SkillsPage = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='font-Raleway text-2xl font-semibold text-codeCraft-900'>
        Department Skills
      </h1>
      <AddSkillsModal />
      <SkillsForm />
      <SkillsCategoryBox />
    </div>
  );
};

export default SkillsPage;
