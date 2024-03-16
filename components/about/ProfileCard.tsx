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
      
      <div className="relative h-36 w-36 rounded-full overflow-hidden border-4 border-white">
        
        <Image src={imagePath} alt={name} width={144} height={144} objectFit="cover" />
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-gray-600">{role}</p>
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
      </div>
    </div>
  );
};

export default ProfileCard;
