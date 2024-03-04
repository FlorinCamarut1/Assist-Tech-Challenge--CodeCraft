import { Button } from '../ui/button';
import { GiOrganigram } from 'react-icons/gi';
import { IoIosPersonAdd } from 'react-icons/io';
import { MdOutlineStackedBarChart } from 'react-icons/md';

import HeroBottomItem from './HeroBottomItem';

const HeroSection = () => {
  return (
    <div>
      {/* Div-ul cu imaginea de fundal, chenar si butoane, folosind Tailwind CSS pentru stilizare */}
      <div className='bg-heroBg h-[766px] w-full bg-cover bg-center bg-no-repeat'>
        <div
          className='absolute left-1/2 top-1/2 flex max-w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-5 rounded-lg bg-[rgba(6,17,37,0.75)] p-10 text-center text-white shadow-lg'
          style={{ padding: '40px 80px' }}
        >
          <h1 className='mb-5 text-6xl font-bold'>Team Finder</h1>
          <p className='mb-5 text-xl font-bold text-[#E9E9E9]'>
            Assemble, Connect, Achieve. Team Finder,
            <br />
            Your Ultimate Team Management Solution
          </p>

          <div className='flex gap-4'>
            <Button variant='secondary' className=' text-codeCraft-900'>
              Register
            </Button>
            <Button>Sign In</Button>
          </div>
        </div>
      </div>

      {/* Subsolul, folosind Tailwind CSS pentru stilizare */}
      <div className='flex items-center justify-around bg-[#061125] py-5 text-lg text-white'>
        <HeroBottomItem
          icon={GiOrganigram}
          title='Create an organization'
          text=' Establish a virtual workspace!'
        />
        <HeroBottomItem
          icon={IoIosPersonAdd}
          title='Invite new associates'
          text='Invite new members!'
        />
        <HeroBottomItem
          icon={MdOutlineStackedBarChart}
          title='Role assignment'
          text='Empower users in workspace!'
        />
      </div>
    </div>
  );
};

export default HeroSection;
