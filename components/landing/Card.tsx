// OrganizationCard.tsx
import React from 'react';
import { BsDiagram3Fill } from "react-icons/bs";

const Card = () => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-lg p-6 flex flex-col items-center space-y-4"> 
      <BsDiagram3Fill className="h-12 w-12 text-[#061125]" />
      <p className="text-lg font-bold text-[#061125] text-center">Create your own Organization</p>
      <p className="text-sm font-semibold text-[#737373] text-center">Effortlessly establish a virtual workspace by creating an organization profile, complete with relevant details.</p>
    </div>
  );
}; export default Card;
