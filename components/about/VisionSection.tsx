import React from 'react';
import Image from 'next/image';

const VisionSection = () => {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-lg font-bold text-[#061125]">Our Vision</h2>
            <p className="text-sm font-semibold text-[#737373]">
              Our vision is to create the largest community of top developers, where every member can find the perfect team to reach their full potential.
            </p>
          </div>
          {/* You can replace the src with the path to the new image you want to use */}

          </div>
        </div>
      </div>

  );
};

export default VisionSection;
