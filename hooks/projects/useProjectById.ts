import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useProjectById = (projectID: string) => {
  const url = `${process.env.NEXT_PUBLIC_API}/Project/${projectID}`;
  const { data, error, isLoading, mutate } = useSWR(
    () => (!projectID ? null : url),
    fetcher
  );

  return { data, error, isLoading, mutate };
};
export default useProjectById;
