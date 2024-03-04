import React from 'react';

const HomePage = () => {
  // URL-ul direct al imaginii tale de fundal
  const backgroundImageUrl = 'https://i.imgur.com/AomMIfc.png';

  return (
    <div>
      {/* Div-ul cu imaginea de fundal, chenar si butoane, folosind Tailwind CSS pentru stilizare */}
      <div className="bg-cover bg-center bg-no-repeat h-[766px] w-full" style={{ backgroundImage: `url('${backgroundImageUrl}')` }}>
        <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center gap-5 bg-[rgba(6,17,37,0.75)] rounded-lg p-10 shadow-lg max-w-full" style={{ padding: '40px 80px' }}>
          <h1 className="font-bold text-6xl mb-5">Team Finder</h1>
          <p className="font-bold text-xl text-[#E9E9E9] mb-5">Assemble, Connect, Achieve. Team Finder,<br />Your Ultimate Team Management Solution</p>
          
          <div>
            <button className="px-5 py-2.5 rounded bg-white text-black border border-white cursor-pointer mr-2.5">Register</button>
            <button className="px-5 py-2.5 rounded text-white bg-transparent border border-white cursor-pointer">Sign In</button>
          </div>
        </div>
      </div>

      {/* Subsolul, folosind Tailwind CSS pentru stilizare */}
      <div className="bg-[#061125] text-white flex justify-around items-center py-5 text-lg">
        {/* Secțiunile din subsol */}
        <div className="flex flex-row items-center bg-[#061125] text-white p-2.5 my-2.5 rounded-lg">
          <img src="https://i.imgur.com/Fspt1aA.png" alt="Create organization icon" className="w-12 h-12 mb-2.5 mr-2.5" />
          <div className="flex flex-col items-start m-0">
            <span className="text-lg mb-1">Create an organization</span>
            <span className="text-sm text-[#A0A0A0]">Establish a virtual workspace!</span>
          </div>
        </div>

        <div className="flex flex-row items-center bg-[#061125] text-white p-2.5 my-2.5 rounded-lg">
          <img src="https://i.imgur.com/5FtG0XO.png" alt="Invite new associates icon" className="w-12 h-12 mb-2.5 mr-2.5" />
          <div className="flex flex-col items-start m-0">
            <span className="text-lg mb-1">Invite new associates</span>
            <span className="text-sm text-[#A0A0A0]">Invite new members!</span>
          </div>
        </div>

        <div className="flex flex-row items-center bg-[#061125] text-white p-2.5 my-2.5 rounded-lg">
          <img src="https://i.imgur.com/Sw2A97N.png" alt="Role assignment icon" className="w-12 h-12 mb-2.5 mr-2.5" />
          <div className="flex flex-col items-start m-0">
            <span className="text-lg mb-1">Role assignment</span>
            <span className="text-sm text-[#A0A0A0]">Empower users in workspace!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
