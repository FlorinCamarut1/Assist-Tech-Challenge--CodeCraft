'use client';
import HeroSection from '@/components/landing/HeroSection';
import React from 'react';

import MainNavigation from '@/components/Navbar/MainNavigation';
import FeatureSection from '@/components/landing/FeaturesSection';

const HomePage = () => {
  return (
    <>
      <MainNavigation />
      <HeroSection />
      <FeatureSection />
    </>
  );
};

export default HomePage;
