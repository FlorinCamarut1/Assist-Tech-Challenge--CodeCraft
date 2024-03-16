// Team.tsx
import React from 'react';
import ProfileCard from './ProfileCard';

const Team = () => {
  const teamMembers = [
    { role: 'Backend Developer (Leader)', name: 'Andreea-Elena Dinco', imagePath: '/images/bus-img/Andreea.png' },
    { role: 'Backend Developer', name: 'Mihai-Alexandru Pricob', imagePath: '/images/bus-img/Mihai.png' },
    { role: 'Frontend Developer', name: 'Florin Camarut', imagePath: '/images/bus-img/Florin.png' },
    { role: 'Frontend Developer', name: 'Stefan-Alexandru Cozloschi', imagePath: '/images/bus-img/Stefan.png' },
    { role: 'QA (Tester)', name: 'Maria Ilie', imagePath: '/images/bus-img/Maria.png' }
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
              imagePath={member.imagePath} // Updated with each member's image path
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
