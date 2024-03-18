import { FaCopy } from 'react-icons/fa';

import useOrganization from '@/hooks/organizations/useOrganization';
import React, { useRef, useState } from 'react';
import { Textarea } from '@nextui-org/react';

interface AdminInviteBoxProps {
  organizationId: string;
}

const AdminInviteBox = ({ organizationId }: AdminInviteBoxProps) => {
  const organization = useOrganization(organizationId);
  const [isCopyed, setIsCopyed] = useState(false);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const copyLink = () => {
    navigator.clipboard.writeText(textareaRef?.current?.value as string);
    setIsCopyed(true);
  };

  return (
    <div className=' h-auto w-[400px] rounded-sm border-[1px] border-codeCraft-100 bg-white p-3 shadow-md'>
      <div className='flex w-full justify-between'>
        <h2 className='font-semibold text-codeCraft-500'>Invite Code:</h2>
        <FaCopy
          size={15}
          color={isCopyed ? '#6E7C96' : '#061125'}
          onClick={copyLink}
          className='cursor-pointer'
        />
      </div>
      <div className='mt-2 w-auto  overflow-hidden '>
        {/* <p
          ref={paragraphRef}
          className=' text p-3 text-xs text-codeCraft-400'
        >{`${process.env.NEXT_PUBLIC_CLIENT}/register?invite=${organization?.data?.id}&organization=${organization?.data?.name}`}</p> */}
        <Textarea
          disabled
          ref={textareaRef}
          value={`${process.env.NEXT_PUBLIC_CLIENT}/register?invite=${organization?.data?.id}&organization=${organization?.data?.name}`}
        />
      </div>
    </div>
  );
};

export default AdminInviteBox;
