import React from 'react';
import Image from 'next/image';
import heroBg from '../public/bg-HeroBackground.png'; // Asum că ai o imagine numită bg-heroBg.jpg în folderul public

const AboutBanner = () => {
  return (
    <div className="bg-heroBg bg-cover bg-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-16">
          <h1 className="mb-5 text-6xl font-bold text-white">About us</h1>
          <p className="mb-5 text-xl font-bold text-[#E9E9E9]">The Code Craft team is made up of 5 young web developers. We are located in Suceava, Romania.</p>

        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
