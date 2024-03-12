// TransparentCard.tsx
import React from 'react';
import { BsRobot } from "react-icons/bs";

const TransparentCard = () => {
  return (
    <div className="rounded-lg p-6 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm">
      <div className="flex items-center space-x-3 mb-4">
        <BsRobot className="h-5 w-5 text-[#15376A]" />
        <p className="text-sm font-bold text-[#15376A]">Available Services</p>
      </div>
      <p className="text-lg font-bold text-[#061125]">Effortlessly establish a virtual workspace</p>
      <p className="text-sm font-semibold text-[#737373]">by creating an organization profile.</p>
    </div>
  );
};

export default TransparentCard;
