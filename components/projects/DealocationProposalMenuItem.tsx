import useUserById from '@/hooks/users/useUserById';
import { ProposalType } from '@/types';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useState } from 'react';
import { Button } from '../ui/button';

import axios from 'axios';
import useDealocationProposalsByProjectId from '@/hooks/proposals/useDealocationProposalsByProjectId';
import useTeamsByProjectId from '@/hooks/team/useTeamsByProjectId';
interface ProposalMenuItemProps {
  proposalData: ProposalType;
}

const DealocationProposalMenuItem = ({
  proposalData,
}: ProposalMenuItemProps) => {
  const { data: userData } = useUserById(proposalData?.userID);
  const { mutate: mutateDeallocation } = useDealocationProposalsByProjectId(
    proposalData?.projectID
  );
  const { mutate: mutateprojectTeamData } = useTeamsByProjectId(
    proposalData?.projectID
  );

  const [proposal, setProposal] = useState(proposalData?.accepted);

  const handleAcceptOrDecline = () => {
    setProposal((proposal) => !proposal);

    axios
      .post(
        `${process.env.NEXT_PUBLIC_API}/DeallocationProposal/AcceptDeallocationProposal?id=${proposalData?.id}`
      )
      .then((response) => {
        mutateDeallocation();
        mutateprojectTeamData();
      });
  };

  const handleDeleteDeallocationProposal = () => {
    axios
      .delete(
        `${process.env.NEXT_PUBLIC_API}/DeallocationProposal/${proposalData?.id}`
      )
      .then((response) => mutateDeallocation());
  };
  return (
    <>
      <div className='flex items-center justify-between'>
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
        <Button onClick={handleDeleteDeallocationProposal} variant='ghost'>
          Delete
        </Button>
      </div>
    </>
  );
};

export default DealocationProposalMenuItem;
