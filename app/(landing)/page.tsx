'use client';


import MainNavigation from '@/components/Navbar/MainNavigation';
import FeatureSection from '@/components/landing/FeaturesSection';

import HeroSection from '@/components/landing/HeroSection';
import MainNavigation from '@/components/navigation/MainNavigation';

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
