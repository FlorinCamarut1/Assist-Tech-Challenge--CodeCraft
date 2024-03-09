import useOrganization from '@/hooks/useOrganization';

interface AdminInviteBoxProps {
  organizationId: string;
}

const AdminInviteBox = ({ organizationId }: AdminInviteBoxProps) => {
  const organization = useOrganization(organizationId);

  return (
    <div className='h-auto w-auto bg-white p-3 shadow-md '>
      <h2>Invite Code:</h2>
      <div className='w-full'>
        <p>{`${process.env.NEXT_PUBLIC_CLIENT}/register?invite=${organization?.data?.id}&organization=${organization?.data?.name}`}</p>
      </div>
    </div>
  );
};

export default AdminInviteBox;
