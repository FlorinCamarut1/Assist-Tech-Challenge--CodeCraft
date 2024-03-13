// Team.tsx
import React from 'react';
import ProfileCard from './ProfileCard';

const Team = () => {
  const teamMembers = [
    { role: 'Backend Developer (Leader)', name: 'Andreea-Elena Dinco' },
    { role: 'Backend Developer', name: 'Mihai-Alexandru Pricob' },
    { role: 'Frontend Developer', name: 'Florin Camarut' },
    { role: 'Frontend Developer', name: 'Stefan-Alexandru Cozloschi' },
    { role: 'QA (Tester)', name: 'Maria Ilie' }
  ];

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-bold text-[#061125] mb-8">Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <ProfileCard
              key={index}
              role={member.role}
              name={member.name.replace(/-/g, ' ')}
              imagePath="/images/bus-img/Business.png" // This will be replaced with each member's image path
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
