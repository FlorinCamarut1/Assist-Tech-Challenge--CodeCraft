'use client';
import HeroSection from '@/components/landing/HeroSection';
import React from 'react';

import MainNavigation from '@/components/Navbar/MainNavigation';

const HomePage = () => {
  return (
    <>
      <MainNavigation />
      <HeroSection />
    </>
  );
};

export default HomePage;
