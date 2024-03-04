import React from 'react';
import { IconType } from 'react-icons/lib';

interface HeroBottomItemProps {
  icon: IconType;
  title: string;
  text: string;
}

const HeroBottomItem = ({ icon: Icon, title, text }: HeroBottomItemProps) => {
  return (
    <div className='my-2.5 flex items-center gap-4 rounded-lg bg-[#061125] p-2.5 text-white'>
      <Icon size={60} />
      <div className='m-0 flex flex-col items-start'>
        <span className='mb-1 text-lg'>{title}</span>
        <span className='text-sm text-[#A0A0A0]'>{text}</span>
      </div>
    </div>
  );
};

export default HeroBottomItem;
