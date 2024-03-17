import useUserById from '@/hooks/users/useUserById';
import { ProposalType } from '@/types';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useState } from 'react';

import axios from 'axios';
interface ProposalMenuItemProps {
  proposalData: ProposalType;
}

const DealocationProposalMenuItem = ({
  proposalData,
}: ProposalMenuItemProps) => {
  const { data: userData } = useUserById(proposalData?.userID);
  const [proposal, setProposal] = useState(proposalData?.accepted);

  const handleAcceptOrDecline = () => {
    setProposal((proposal) => !proposal);

    axios.post(
      `${process.env.NEXT_PUBLIC_API}/AcceptDeallocationProposal?id=${proposalData?.id}`
    );
  };

  return (
    <>
      <div className='flex justify-between'>
        <p>
          <span className='font-semibold'>Name: </span>
          {userData?.name}
        </p>
        <p>
          <span className='font-semibold'>Reason: </span>
          {proposalData?.deallocationReason}
        </p>
        <div className='flex items-center space-x-2'>
          <Switch
            id='proposal'
            checked={proposal}
            onCheckedChange={handleAcceptOrDecline}
          />
          <Label htmlFor='airplane-mode'>Accept</Label>
        </div>
      </div>
    </>
  );
};

export default DealocationProposalMenuItem;
