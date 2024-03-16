import React from 'react';
import Image from 'next/image';

const IntroductionSection = () => {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-lg font-bold text-[#061125]">Introduction</h2>
            <p className="text-sm font-semibold text-[#737373]">
              In the constantly changing world of technology, finding the right partners to turn innovative ideas into reality can often be a bigger challenge than coding itself. This is where Team Finder comes in, your bridge to discovering perfect programming collaborations. Born out of an unwavering passion for code and the belief that together we can build extraordinary things, Team Finder is more than just a connecting space; it is a vibrant community, a place where ideas meet talent, and where every project becomes an exciting adventure.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-end pt-8 mr-8"> {/* Added pt-8 for padding-top */}
          <Image src="/images/bus-img/Business.png" alt="Business" width={500} height={300} objectFit="contain" style={{ borderRadius: '20px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;
