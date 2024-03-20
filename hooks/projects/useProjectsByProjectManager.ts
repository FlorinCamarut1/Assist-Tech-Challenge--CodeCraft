import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useProjectsByProjectManager = (projManId: string) => {
  const url = `${process.env.NEXT_PUBLIC_API}/Project/ProjectManager/${projManId}`;
  const { data, error, isLoading, mutate } = useSWR(
    () => (!projManId ? null : url),
    fetcher
  );

  return { data, error, isLoading, mutate };
};
export default useProjectsByProjectManager;
