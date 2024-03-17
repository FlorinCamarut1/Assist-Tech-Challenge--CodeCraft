import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useDealocationProposalsByProjectId = (projectId: string) => {
  const url = `${process.env.NEXT_PUBLIC_API}/DeallocationProposal/Project/${projectId}`;
  const { data, error, isLoading, mutate } = useSWR(
    () => (!projectId ? null : url),
    fetcher
  );

  return { data, error, isLoading, mutate };
};
export default useDealocationProposalsByProjectId;
