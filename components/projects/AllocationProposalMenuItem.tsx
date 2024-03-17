import useUserById from '@/hooks/users/useUserById';
import { ProposalType } from '@/types';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

import axios from 'axios';
interface ProposalMenuItemProps {
  proposalData: ProposalType;
}

const AllocationProposalMenuItem = ({
  proposalData,
}: ProposalMenuItemProps) => {
  const { data: userData } = useUserById(proposalData?.userID);
  const [proposal, setProposal] = useState(proposalData?.accepted);
  const [isDealocating, setIsDealocationg] = useState(false);
  const [dealocationReason, setDealocationReason] = useState('');

  const handleAcceptOrDecline = () => {
    setProposal((proposal) => !proposal);
    if (proposal === false) {
      axios.post(
        `${process.env.NEXT_PUBLIC_API}/AssignmentProposal/AcceptAssignmentProposal?id=${proposalData?.id}`
      );
    } else if (proposal === true) {
      setIsDealocationg((alocate) => !alocate);
    }
  };

  const handleDealocation = () => {
    if (dealocationReason === '') return;
    axios.post(`${process.env.NEXT_PUBLIC_API}/DeallocationProposal`, {
      userID: proposalData?.userID,
      projectID: proposalData?.projectID,
      deallocationReason: dealocationReason,
      accepted: false,
    });
  };
  return (
    <>
      <div className='flex justify-between'>
        <p>
          <span className='font-semibold'>Name: </span>
          {userData?.name}
        </p>

        <div className='flex items-center space-x-2'>
          <Switch
            id='proposal'
            checked={proposal}
            onCheckedChange={handleAcceptOrDecline}
          />
          <Label htmlFor='airplane-mode'>Allocate/Dealocate</Label>
        </div>
      </div>
      {isDealocating && (
        <div className='flex gap-2'>
          <Input
            placeholder='Dealocation Reason'
            value={dealocationReason}
            onChange={(e) => setDealocationReason(e.target.value)}
          />
          <Button onClick={handleDealocation}>Dealocate</Button>
        </div>
      )}
    </>
  );
};

export default AllocationProposalMenuItem;
