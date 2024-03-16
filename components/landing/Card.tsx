import React from 'react';
import { IconType } from 'react-icons';

// Tipizarea propietăților pentru componenta Card
interface CardProps {
  Icon: IconType;
  text: string;
  subtext: string;
}

const Card: React.FC<CardProps> = ({ Icon, text, subtext }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-lg p-6 flex flex-col items-center space-y-4"> 
      <Icon className="h-12 w-12 text-[#061125]" />
      <p className="text-lg font-bold text-[#061125] text-center">{text}</p>
      <p className="text-sm font-semibold text-[#737373] text-center">{subtext}</p>
    </div>
  );
};

export default Card;
