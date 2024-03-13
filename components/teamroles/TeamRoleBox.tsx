import { getSession } from '@/actions/getSession';
import useTeamRoles from '@/hooks/useTeamRoles';
import axios from 'axios';
import { IoMdClose } from 'react-icons/io';

interface TeamRoleBoxProps {
  name: string;
  id: string;
}

const TeamRoleBox = ({ name, id }: TeamRoleBoxProps) => {
  const session = getSession();

  const { mutate: mutateFetchedTeamRoles } = useTeamRoles(
    session?.organizationID
  );
  const deleteTeamRole = () => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_API}/TeamRole/${id}`)
      .then((data) => mutateFetchedTeamRoles());
  };
  return (
    <div className='flex items-center justify-between rounded-md bg-slate-100 p-2'>
      <span>{name}</span>
      <IoMdClose className='cursor-pointer' onClick={deleteTeamRole} />
    </div>
  );
};

export default TeamRoleBox;
