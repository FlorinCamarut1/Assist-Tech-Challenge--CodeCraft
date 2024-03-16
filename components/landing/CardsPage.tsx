import React from 'react';
import TransparentCard from './TransparentCard';
import Card from './Card';
import { BsDiagram3Fill, BsFillPersonPlusFill } from "react-icons/bs";
import { IoIosStats } from "react-icons/io";
import { FaFolderPlus } from "react-icons/fa"; // Import nou pentru a patra iconiță
import { GiSkills } from "react-icons/gi"; // Import nou pentru a cincea iconiță
import { RiTeamFill } from "react-icons/ri";
const cardsData = [

  {Icon: RiTeamFill,
  text:"Team Finder",
  subtext:"To link individuals with alike skills and interests for collaborative projects"},

  {
    Icon: BsDiagram3Fill,
    text: "Create your own Organization",
    subtext: "Effortlessly establish a virtual workspace by creating an organization profile, complete with relevant details."
  },
  {
    Icon: BsFillPersonPlusFill,
    text: "Invite new associates",
    subtext: "Invite new members you can rely on to fulfill your projects."
  },
  {
    Icon: IoIosStats,
    text: "Role assignment",
    subtext: "Empower users in the workspace by offering them the appropriate roles."
  },
  
  {
    Icon: FaFolderPlus,
    text: "Create new projects",
    subtext: "Create innovative projects with your team."
  },
  
  {
    Icon: GiSkills,
    text: "Skill statistics",
    subtext: "You can observe what each member is best at."
  }
];

const CardsPage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
          <div className="flex flex-col items-center mt-10">
      <h1 className="text-[#061125] text-6xl mb-5">Available Services</h1>
      <h2 className="text-[#737373] mb-5 text-xl font-bold">Discover a Wide Array of Services Tailored to Your Needs</h2>
    </div>
    <br></br>
  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

     
          
          {cardsData.map((card, index) => (
            <Card key={index} Icon={card.Icon} text={card.text} subtext={card.subtext} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
