'use client';
import AccountContainer from '@/components/account/AccountContainer';
import AddSkillModal from '@/components/modals/AddSkillModal';

import React from 'react';

const AccountPage = () => {
  return (
    <>
      <AddSkillModal />
      <AccountContainer />
    </>
  );
};

export default AccountPage;
