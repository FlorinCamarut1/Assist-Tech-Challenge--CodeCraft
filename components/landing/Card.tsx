import React from 'react';
import 'tailwindcss/tailwind.css';

const availableServicesIcon = 'https://i.imgur.com/onp19KS.png';
const organizationIcon = 'https://i.imgur.com/dDXqB2d.png';

function Card() {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center"> {/* Centrare pe verticala */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Cardul transparent */}
          <div className="rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <img src={availableServicesIcon} alt="Available Services" className="h-5 w-5" />
              <p className="text-sm font-bold text-[#15376A]">Available Services</p>
            </div>
            <p className="text-lg font-bold text-[#061125]">Effortlessly establish a virtual workspace</p>
            <p className="text-sm font-semibold text-[#737373]">by creating an organization profile.</p>
          </div>

          {/* Cardurile cu organizatii */}
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="bg-gray-100 rounded-lg shadow-lg p-6 flex flex-col items-center space-y-4" key={index}> 
              <img src={organizationIcon} alt="Organization" className="h-12 w-12" />
              <p className="text-lg font-bold text-[#061125] text-center">Create your own Organization</p>
              <p className="text-sm font-semibold text-[#737373] text-center">Effortlessly establish a virtual workspace by creating an organization profile, complete with relevant details.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
