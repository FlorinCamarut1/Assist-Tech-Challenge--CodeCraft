
import React from 'react';
import Image from 'next/image';

interface ProfileCardProps {
  role: string;
  name: string;
  imagePath: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ role, name, imagePath }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-lg p-6 flex flex-col items-center space-y-4">
      <Image src={imagePath} alt={name} width={200} height={200} objectFit="contain" className="rounded-full" />
      <div className="text-center">
        <p className="text-sm font-semibold text-[#737373]">{role}</p>
        <h3 className="text-lg font-bold text-[#061125]">{name}</h3>
      </div>
    </div>
  );
};

export default ProfileCard;
