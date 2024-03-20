'use client';
import AccountBox from '@/components/account/AccountBox';
import useUserById from '@/hooks/users/useUserById';
import React from 'react';

const MemberPage = ({ params }: { params: { memberId: string } }) => {
  const { data: currentUser } = useUserById(params?.memberId);
  return <AccountBox currentUserData={currentUser} />;
};

export default MemberPage;
