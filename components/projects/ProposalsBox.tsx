import { ProjectType } from '@/types';

import useAllocationProposalsByProjectId from '@/hooks/proposals/useAllocationProposalsByProjectId';
import useDealocationProposalsByProjectId from '@/hooks/proposals/useDealocationProposalsByProjectId';
import React from 'react';

import AllocationProposalMenuItem from './AllocationProposalMenuItem';
import DealocationProposalMenuItem from './DealocationProposalMenuItem';

interface ProposalsBoxProps {
  projectData: ProjectType;
}

const ProposalsBox = ({ projectData }: ProposalsBoxProps) => {
  const { data: allocationProposals } = useAllocationProposalsByProjectId(
    projectData?.id
  );
  const { data: dealocationProposals } = useDealocationProposalsByProjectId(
    projectData?.id
  );

  return (
    <div className='space-y-2 rounded-md px-4 py-6 shadow-md'>
      <h1 className=' font-Raleway text-3xl font-semibold text-codeCraft-500 '>
        Proposals
      </h1>
      <div className='space-y-2 rounded-md p-2 shadow-md'>
        <h3 className='font-semibold text-codeCraft-500'>Allocation</h3>
        {allocationProposals?.map((proposal: any) => (
          <AllocationProposalMenuItem
            key={proposal.id}
            proposalData={proposal}
          />
        ))}
      </div>
      <div className='space-y-2 rounded-md p-2 shadow-md'>
        <h3 className='font-semibold text-codeCraft-500'>Dealocation</h3>

        {dealocationProposals?.map((proposal: any) => (
          <DealocationProposalMenuItem
            key={proposal.id}
            proposalData={proposal}
          />
        ))}
      </div>
    </div>
  );
};

export default ProposalsBox;
