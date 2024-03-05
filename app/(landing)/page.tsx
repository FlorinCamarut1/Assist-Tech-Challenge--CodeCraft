'use client';

import HeroSection from '@/components/landing/HeroSection';
import MainNavigation from '@/components/navigation/MainNavigation';
import useOrganisations from '@/hooks/useOrganisations';
import React from 'react';

const HomePage = () => {
  const { data } = useOrganisations();
  console.log(data);
  return (
    <>
      <MainNavigation />
      <HeroSection />
    </>
  );
};
// test
export default HomePage;
