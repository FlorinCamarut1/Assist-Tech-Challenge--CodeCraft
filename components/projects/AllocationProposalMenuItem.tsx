import useUserById from '@/hooks/users/useUserById';
import { ProposalType } from '@/types';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

import axios from 'axios';
import useAllocationProposalsByProjectId from '@/hooks/proposals/useAllocationProposalsByProjectId';
import useDealocationProposalsByProjectId from '@/hooks/proposals/useDealocationProposalsByProjectId';
import useTeamsByProjectId from '@/hooks/team/useTeamsByProjectId';
interface ProposalMenuItemProps {
  proposalData: ProposalType;
}

const AllocationProposalMenuItem = ({
  proposalData,
}: ProposalMenuItemProps) => {
  const { mutate: mutateAllocation } = useAllocationProposalsByProjectId(
    proposalData?.projectID
  );
  const { mutate: mutateDeAllocation } = useDealocationProposalsByProjectId(
    proposalData?.projectID
  );
  const { mutate: mutateprojectTeamData } = useTeamsByProjectId(
    proposalData?.projectID
  );
  const { data: userData } = useUserById(proposalData?.userID);
  const [proposal, setProposal] = useState(proposalData?.accepted);
  const [isDealocating, setIsDealocationg] = useState(false);
  const [dealocationReason, setDealocationReason] = useState('');

  const handleAcceptOrDecline = () => {
    setProposal((proposal) => !proposal);
    if (proposal === false) {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API}/AssignmentProposal/AcceptAssignmentProposal?id=${proposalData?.id}`
        )
        .then((response) => {
          mutateAllocation();
          mutateprojectTeamData();
        });
    } else if (proposal === true) {
      setIsDealocationg((alocate) => !alocate);
    }
  };

  const handleDealocation = () => {
    if (dealocationReason === '') return;
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/DeallocationProposal`, {
        userID: proposalData?.userID,
        projectID: proposalData?.projectID,
        deallocationReason: dealocationReason,
        accepted: false,
      })
      .then((response) => {
        mutateDeAllocation();
        mutateAllocation();
        mutateprojectTeamData();
        setDealocationReason('');
        setIsDealocationg(false);
      });
  };

  const handleDeleteAssignProposal = () => {
    axios
      .delete(
        `${process.env.NEXT_PUBLIC_API}/AssignmentProposal/${proposalData?.id}`
      )
      .then((response) => mutateAllocation());
  };
  return (
    <>
      <div className='grid grid-cols-5 items-center'>
        <p>
          <span className='font-semibold'>Name: </span>
          {userData?.name}
        </p>
        <p>
          <span className='font-semibold'>Work Hours: </span>
          {proposalData?.workHours}
        </p>
        <p>
          <span className='font-semibold'>Comments: </span>
          {proposalData?.comments}
        </p>

        <div className='flex items-center space-x-2'>
          <Switch
            id='proposal'
            checked={proposal}
            onCheckedChange={handleAcceptOrDecline}
          />
          <Label htmlFor='airplane-mode'>Allocate/Dealocate</Label>
        </div>
        <Button variant='ghost' onClick={handleDeleteAssignProposal}>
          Delete
        </Button>
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
