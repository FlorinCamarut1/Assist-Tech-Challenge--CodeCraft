interface MemberCardProps {
  data?: any;
}

const MemberCard = ({ data }: MemberCardProps) => {
  return (
    <div className='mt-2 flex w-full cursor-pointer justify-between rounded-md border-[1px] border-codeCraft-100 p-2 shadow-sm hover:bg-slate-100'>
      <p className=' font-semibold'>
        Name: <span className='font-normal'>{data?.user?.name}</span>
      </p>
      <p className=' font-semibold'>
        WorkHours: <span className='font-normal'>{data?.workHours}</span>
      </p>
    </div>
  );
};

export default MemberCard;
