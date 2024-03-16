'use client';

import HeroSection from '@/components/landing/HeroSection';
import React from 'react';
import MainNavigation from '@/components/navigation/MainNavigation';
import AboutBanner from '@/components/about/Banner';
import Footer from '@/components/landing/Footer';
import IntroductionSection from '@/components/about/IntroductionSection';
import VisionSection from '@/components/about/VisionSection';
import ValuesSection from '@/components/about/ValuesSection';
import Team from '@/components/about/Team';
import ImplicationSection from '@/components/about/ImplicationSection';
const About = () => {
  return (
    <>
      <MainNavigation />
      <AboutBanner />
      <IntroductionSection />
      <VisionSection />
      <ValuesSection />
      <Team />
      <ImplicationSection />

      <Footer />
    </>
  );
};
export default About;
