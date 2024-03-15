'use client';
import { NextUIProvider } from '@nextui-org/react';
import FeatureSection from '@/components/landing/FeaturesSection';
import HeroSection from '@/components/landing/HeroSection';
import MainNavigation from '@/components/navigation/MainNavigation';

const HomePage = () => {
  return (
    <>
      <NextUIProvider>
        <MainNavigation />
        <HeroSection />
        <FeatureSection />
      </NextUIProvider>
    </>
  );
};

export default HomePage;
