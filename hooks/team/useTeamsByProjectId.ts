import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useTeamsByProjectId = (projectId: string) => {
  const url = `${process.env.NEXT_PUBLIC_API}/ProjectTeam/Project/${projectId}`;
  const { data, error, isLoading, mutate } = useSWR(
    () => (!projectId ? null : url),
    fetcher
  );

  return { data, error, isLoading, mutate };
};
export default useTeamsByProjectId;
