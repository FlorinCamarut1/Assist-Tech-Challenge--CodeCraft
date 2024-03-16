import { Checkbox } from '@/components/ui/checkbox';
import { Modal } from '@nextui-org/react';

import React from 'react';
import useTeamFinderFilter from '@/hooks/team-finder/useTeamFinderFilter';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const TeamFinderFilter = () => {
  const filter = useTeamFinderFilter();

  return (
    <div className='flex flex-col gap-2 rounded-md bg-slate-100 p-2'>
      <div className='flex  gap-2'>
        <h3 className='font-semibold'>Filter by:</h3>
        <div className='flex items-center space-x-2'>
          <Checkbox
            id='PartiallyAvailable'
            onCheckedChange={filter.setPartiallyAvailable}
          />
          <label
            htmlFor='PartiallyAvailable'
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            Partially Available
          </label>
        </div>
        {/* 1 */}
        <div className='flex items-center space-x-2'>
          <Checkbox
            id='projectsCloseToFinish'
            onCheckedChange={filter.setProjectsCloseToFinish}
          />
          <label
            htmlFor='projectsCloseToFinish'
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            Close To Finish
          </label>
        </div>
        {/* 2 */}
        <div className='flex items-center space-x-2'>
          <Checkbox id='unavailable' onCheckedChange={filter.setUnavailable} />
          <label
            htmlFor='unavailable'
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            Unavailable
          </label>
        </div>
        {/* 3 */}

        {/* 4 */}
        <div className='flex items-center space-x-2'>
          <Checkbox
            id='pastExperience'
            onCheckedChange={filter.setPastExperience}
          />
          <label
            htmlFor='pastExperience'
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            Past Experience
          </label>
        </div>
        {/* 5 */}
      </div>
      <div className='w-auto'>
        {filter.projectsCloseToFinish && (
          <Select onValueChange={(value) => filter.setWeeks(Number(value))}>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Weeks until reaches deadline' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Weeks until reaches deadline</SelectLabel>

                <SelectItem value='2'>2 weeks</SelectItem>
                <SelectItem value='3'>3 weeks</SelectItem>
                <SelectItem value='4'>4 weeks</SelectItem>
                <SelectItem value='5'>5 weeks</SelectItem>
                <SelectItem value='6'>6 weeks</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      </div>
    </div>
  );
};

export default TeamFinderFilter;
